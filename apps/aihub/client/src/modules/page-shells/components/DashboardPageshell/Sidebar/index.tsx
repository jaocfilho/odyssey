import { HomeIcon } from '@heroicons/react/24/outline';

import { SidebarContainer } from './Container';
import { NavItem } from './NavItem';

export const Sidebar = () => {
  const navigation = [
    { name: 'Models', href: '#', Icon: HomeIcon, current: true },
  ];

  return (
    <SidebarContainer>
      <nav className="flex mt-16 flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map(({ name, href, Icon, current }) => (
                <NavItem
                  key={name}
                  name={name}
                  href={href}
                  Icon={Icon}
                  current={current}
                />
              ))}
            </ul>
          </li>

          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-slate-700"
            >
              <img
                className="h-8 w-8 rounded-full bg-slate-700"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </SidebarContainer>
  );
};
