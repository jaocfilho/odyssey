import { signIn } from 'next-auth/react';

import { Button } from 'milky-ui';

export const LoginButton = () => {
  const handleClick = () => signIn();

  return <Button onClick={handleClick}>Continue with Github</Button>;
};
