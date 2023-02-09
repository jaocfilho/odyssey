import { createContext, ReactNode } from 'react';

import { useHeatmapColumns } from '../../hooks';

type HeatmapContextValue = {
  columns: number;
};

const heatmapContext = createContext({} as HeatmapContextValue);

type HeatmapContextProviderProps = {
  children: ReactNode;
};

export const HeatmapContextProvider = ({
  children,
}: HeatmapContextProviderProps) => {
  const { columns } = useHeatmapColumns();

  const value: HeatmapContextValue = { columns };

  return (
    <heatmapContext.Provider value={value}>{children}</heatmapContext.Provider>
  );
};
