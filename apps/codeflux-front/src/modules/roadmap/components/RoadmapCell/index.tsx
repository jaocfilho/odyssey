import { Bar, BarProps } from "./Bar";
import { Container } from "./Container";

type RoadmapCellProps = BarProps;

export const RoadmapCell = ({ color, type }: RoadmapCellProps) => {
  return (
    <Container>
      <Bar color={color} type={type} />
    </Container>
  );
};
