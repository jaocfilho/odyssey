import Image from 'next/image';

import logo from '../../../public/logo.svg';

export const Logo = () => {
  return (
    <div className="cursor-pointer hover:opacity-80">
      <Image src={logo} height={32} alt="Logo" />
    </div>
  );
};
