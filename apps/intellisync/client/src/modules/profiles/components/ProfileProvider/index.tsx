import { createContext, type ReactNode } from 'react';

type ProfileProviderProps = {
  children: ReactNode;
};

const ProfileContext = createContext({});

export function ProfileProvider({ children }: ProfileProviderProps) {
  return (
    <ProfileContext.Provider value={{}}>{children}</ProfileContext.Provider>
  );
}
