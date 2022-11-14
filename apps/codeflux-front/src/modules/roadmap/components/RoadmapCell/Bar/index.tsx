import { BarContainer, BarContainerProps } from "./styles";

export type BarProps = Required<Pick<BarContainerProps, "color" | "type">>;

export const Bar = ({ color, type }: BarProps) => {
  return <BarContainer cursorPointer color={color} type={type} />;
};
