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
    if (getCookie('sessionId') || !user) {
      router.push('login');
    } else axios.get('api/users/login/').then((res) => console.log(res));
  }, [router]);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
