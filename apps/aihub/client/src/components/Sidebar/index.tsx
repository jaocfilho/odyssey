import { SidebarContainer } from './Container';
import { LogoArea } from './LogoArea';
import { NavContainer } from './NavContainer';
import { ChatbotsPageNavItem } from './NavigationItems';

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoArea />
      <div className="mt-2 flex h-0 flex-1 flex-col overflow-y-auto">
        <NavContainer>
          <ChatbotsPageNavItem />
        </NavContainer>
      </div>
    </SidebarContainer>
  );
};
