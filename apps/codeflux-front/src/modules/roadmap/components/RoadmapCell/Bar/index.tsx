import { BarContainer, BarContainerProps } from "./styles";

export type BarProps = Required<Pick<BarContainerProps, "color" | "type">>;

export const Bar = ({ color, type }: BarProps) => {
  return <BarContainer my={2} cursorPointer color={color} type={type} />;
};
