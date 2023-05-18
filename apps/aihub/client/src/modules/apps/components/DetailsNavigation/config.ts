import { AppDetailsOverviewLink } from '@/modules/navigation/components/AppDetailsOverviewLink';
import { AppDetailsPromptLink } from '@/modules/navigation/components/AppDetailsPromptLink';
import { AppDetailsRefinementLink } from '@/modules/navigation/components/AppDetailsRefinementLink';

export const appDetailsNavigation = [
  {
    name: 'Overview',
    href: 'overview',
    Link: AppDetailsOverviewLink,
  },
  {
    name: 'Refinement',
    href: 'refinement',
    Link: AppDetailsRefinementLink,
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
