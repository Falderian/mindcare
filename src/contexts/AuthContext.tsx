import axios from 'axios';
import { getCookie } from 'cookies-next';
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

type TUserContext = { user: TUser | null; setUser: Dispatch<SetStateAction<TUser | null>> | null };

export const AuthContext = createContext<TUserContext>({
  user: null,
  setUser: null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);

  useEffect(() => {
    if (getCookie('sessionId')) {
      axios.get('api/users/login/');
    }
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
