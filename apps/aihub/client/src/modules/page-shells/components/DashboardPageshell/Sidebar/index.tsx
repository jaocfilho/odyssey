import { HomeIcon } from '@heroicons/react/24/outline';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { Squares2X2Icon } from '@heroicons/react/24/outline';

import { SidebarContainer } from './Container';
import { NavItem } from './NavItem';
import { LogoArea } from './LogoArea';
import { NavContainer } from './NavContainer';

export const Sidebar = () => {
  const navigation = [
    { href: '#', Icon: HomeIcon, current: true },
    { href: '#', Icon: Squares2X2Icon, current: false },
    { href: '#', Icon: Cog6ToothIcon, current: false },
  ];

  return (
    <SidebarContainer>
      <LogoArea />
      <div className="mt-2 flex h-0 flex-1 flex-col overflow-y-auto">
        <NavContainer>
          {navigation.map(({ href, Icon, current }) => (
            <NavItem key={href} href={href} Icon={Icon} current={current} />
          ))}
        </NavContainer>
      </div>
    </SidebarContainer>
  );
};
