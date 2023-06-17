import { AccountItem } from './AccountItem';
import { SidebarContainer } from './Container';
import { LogoArea } from './LogoArea';
import { NavContainer } from './NavContainer';
import { ChatbotsPageNavItem, SettingsPageNavItem } from './NavigationItems';

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoArea />
      <div className="mt-2 flex h-0 flex-1 flex-col overflow-y-auto">
        <div className="flex flex-col h-full justify-between">
          <NavContainer>
            <ChatbotsPageNavItem />
            <SettingsPageNavItem />
          </NavContainer>
          <AccountItem />
        </div>
      </div>
    </SidebarContainer>
  );
};
