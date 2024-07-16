import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

type TUserContext = { user: TUser | null; setUser: Dispatch<SetStateAction<TUser | null>> | null };

export const AuthContext = createContext<TUserContext>({
  user: null,
  setUser: null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkSessionAndFetchUser = async () => {
      const sessionExists = getCookie('sessionId');

      if (!sessionExists) {
        router.push('login');
      } else {
        try {
          const response = await axios.get('api/users/login/');
          console.log(response);
        } catch (error) {
          console.error('Failed to fetch user:', error);
        }
      }
    };

    checkSessionAndFetchUser();
  }, [router]);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
