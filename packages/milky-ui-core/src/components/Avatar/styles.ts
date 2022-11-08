import * as Avatar from "@radix-ui/react-avatar";

import { styled } from "../../styles/stiches";

export const AvatarContainer = styled(Avatar.Root, {});

export const AvatarImage = styled(Avatar.Image, {
  hFull: true,
  wFull: true,
  objectFit: "cover",
  rounded: "inherit",
});

export const AvatarFallback = styled(Avatar.Fallback, {
  hFull: true,
  wFull: true,
  display: "flex",
  justifyContentCenter: true,
  alignItemsCenter: true,
  rounded: "inherit",

  svg: {
    height: "$7",
    width: "$7",
  }
});
