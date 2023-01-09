import { Avatar } from 'milky-ui';

import { useUser } from '../../';

type BaseUserAvatarProps = {
  image: string;
  name: string;
};

export const BaseUserAvatar = ({ image, name }: BaseUserAvatarProps) => {
  return <Avatar src={image} alt={name} />;
};

export const UserAvatar = () => {
  const user = useUser();

  if (user === null) return null;

  const { image, name } = user;

  return <BaseUserAvatar image={image} name={name} />;
};
