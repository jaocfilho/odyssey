import { Css } from 'milky-ui';

type GridBorderConfig = {
  [any: string]: Css['borderWidth'] | Css['borderStyle'] | Css['borderColor'];
};

export const HEATMAP_GRID_BORDER_WIDTH = 1;
export const HEATMAP_GRID_BORDER_STYLE = 'solid';
export const HEATMAP_GRID_BORDER_COLOR = '$gray6';

export const HEATMAP_GRID_BORDER_BOTTOM: GridBorderConfig = {
  bb: HEATMAP_GRID_BORDER_WIDTH,
  bbStyle: HEATMAP_GRID_BORDER_STYLE,
  bbColor: HEATMAP_GRID_BORDER_COLOR,
};

export const HEATMAP_GRID_BORDER_RIGHT: GridBorderConfig = {
  br: HEATMAP_GRID_BORDER_WIDTH,
  brStyle: HEATMAP_GRID_BORDER_STYLE,
  brColor: HEATMAP_GRID_BORDER_COLOR,
};
