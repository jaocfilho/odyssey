import { HomeIcon } from '@heroicons/react/24/outline';

import { SidebarContainer } from './Container';
import { NavItem } from './NavItem';
import { LogoArea } from './LogoArea';
import { NavContainer } from './NavContainer';

export const Sidebar = () => {
  const navigation = [
    { name: 'Home', href: '#', Icon: HomeIcon, current: true },
  ];

  return (
    <SidebarContainer>
      <LogoArea />
      <div className="mt-5 flex h-0 flex-1 flex-col overflow-y-auto pt-1">
        <NavContainer>
          {navigation.map(({ name, href, Icon, current }) => (
            <NavItem
              key={name}
              name={name}
              href={href}
              Icon={Icon}
              current={current}
            />
          ))}
        </NavContainer>
      </div>
    </SidebarContainer>
  );
};
