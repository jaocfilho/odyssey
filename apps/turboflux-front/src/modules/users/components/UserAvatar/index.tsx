import { Avatar } from 'milky-ui';

import { useUser } from '../../hooks/useUser';

type BaseUserAvatarProps = {
  image: string;
  name: string;
  cursorPointer?: boolean;
};

type UserAvatarProps = {
  cursorPointer?: boolean;
};

export const BaseUserAvatar = ({
  image,
  name,
  cursorPointer,
}: BaseUserAvatarProps) => {
  return <Avatar src={image} alt={name} cursorPointer={cursorPointer} />;
};

export const UserAvatar = ({ cursorPointer }: UserAvatarProps) => {
  const user = useUser();

  if (user === null) return null;

  const { image, name } = user;

  return (
    <BaseUserAvatar image={image} name={name} cursorPointer={cursorPointer} />
  );
};
