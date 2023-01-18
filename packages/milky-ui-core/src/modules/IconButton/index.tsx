import { styled } from "../../styles/stiches";
import { ComponentProps } from "../../utils/types";
import { BaseButton } from "../Button";

export const IconButton = styled(BaseButton, {
  py: "$2",
  px: "$2",
});

export type IconButtonProps = ComponentProps<typeof IconButton>;
