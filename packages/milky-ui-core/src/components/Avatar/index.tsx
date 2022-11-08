import {
  AvatarContainer,
  AvatarImage,
  AvatarFallback,
} from "./styles";

export const Avatar = () => {
  return (
    <AvatarContainer >
      <AvatarImage />

      <AvatarFallback />
    </AvatarContainer>
  );
};
