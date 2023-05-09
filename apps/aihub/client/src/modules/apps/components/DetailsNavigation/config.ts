import { AppDetailsOverviewLink } from '@/modules/navigation/components/AppDetailsOverviewLink';
import { AppDetailsPromptLink } from '@/modules/navigation/components/AppDetailsPromptLink';

export const appDetailsNavigation = [
  {
    name: 'Overview',
    href: 'overview',
    Link: AppDetailsOverviewLink,
  },
  {
    name: 'Refine',
    href: 'refine',
    Link: AppDetailsOverviewLink,
  },
  {
    name: 'Prompt',
    href: 'prompt',
    Link: AppDetailsPromptLink,
  },
  {
    name: 'Settings',
    href: 'settings',
    Link: AppDetailsPromptLink,
  },
];
