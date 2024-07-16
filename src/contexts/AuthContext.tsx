import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { useNotify } from '../hooks/useNotify';

type TUserContext = { user: TUser | null; setUser: Dispatch<SetStateAction<TUser | null>> | null };

export const AuthContext = createContext<TUserContext>({
  user: null,
  setUser: null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const { notifyFetch } = useNotify();
  const router = useRouter();

  useEffect(() => {
    const sessionId = getCookie('sessionId');
    if (sessionId && !user) {
      notifyFetch(axios.get('api/users/login/').then(({ data }) => setUser(data)));
      router.back();
    } else router.push('login');
  }, [router]);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
