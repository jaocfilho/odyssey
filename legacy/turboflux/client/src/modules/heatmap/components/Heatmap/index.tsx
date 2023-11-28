import { HeatmapContainer } from '../HeatmapContainer';
import { HeatmapContextProvider, useHeatmap } from '../../providers';

export const HeatmapBase = () => {
  const { columns } = useHeatmap();

  return <HeatmapContainer columns={columns} />;
};

export const Heatmap = () => {
  return (
    <HeatmapContextProvider>
      <HeatmapBase />
    </HeatmapContextProvider>
  );
};
