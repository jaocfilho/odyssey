import { createContext, ReactNode } from 'react';

const heatmapContext = createContext({});

type HeatmapContextProviderProps = {
  children: ReactNode;
};

export const HeatmapContextProvider = ({
  children,
}: HeatmapContextProviderProps) => {
  return (
    <heatmapContext.Provider value={{}}>{children}</heatmapContext.Provider>
  );
};
