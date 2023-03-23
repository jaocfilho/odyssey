import Image from 'next/image';

import logo from '../../../public/logo.svg';

export const Logo = () => {
  return <Image src={logo} height={32} alt="Logo" />;
};
