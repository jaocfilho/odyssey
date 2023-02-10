import { createContext, ReactNode, useContext } from 'react';

import { HeatmapColumns } from '../../entities';
import { useHeatmapColumns } from '../../hooks';

type HeatmapContextValue = {
  columns: HeatmapColumns;
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

export const useHeatmap = () => useContext(heatmapContext);
