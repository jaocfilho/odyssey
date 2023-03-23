import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import { classNames } from '@/modules/theme/utils';
import { SidebarContainer } from './Container';
import { LogoArea } from './LogoArea';
import { NavItem } from './NavItem';

export const Sidebar = () => {
  const navigation = [
    { name: 'Dashboard', href: '#', Icon: HomeIcon, current: true },
    { name: 'Team', href: '#', Icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', Icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', Icon: CalendarIcon, current: false },
    {
      name: 'Documents',
      href: '#',
      Icon: DocumentDuplicateIcon,
      current: false,
    },
    { name: 'Reports', href: '#', Icon: ChartPieIcon, current: false },
  ];

  const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
  ];

  return (
    <SidebarContainer>
      <LogoArea />
      <nav className="flex flex-1 flex-col">
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

          <li>
            <div className="text-xs font-semibold leading-6 text-gray-400">
              Your teams
            </div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {teams.map((team) => (
                <li key={team.name}>
                  <a
                    href={team.href}
                    className={classNames(
                      team.current
                        ? 'bg-slate-700 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-slate-700',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-700 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                      {team.initial}
                    </span>
                    <span className="truncate">{team.name}</span>
                  </a>
                </li>
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
