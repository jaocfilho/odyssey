import { HomeIcon } from '@heroicons/react/24/outline';

export type TIcon = typeof HomeIcon;
type NavIconProps = {
  Icon: TIcon;
};

export const NavIcon = ({ Icon }: NavIconProps) => {
  return <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />;
};
