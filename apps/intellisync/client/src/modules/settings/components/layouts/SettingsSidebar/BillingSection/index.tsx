import { SecondarySidebarList } from '@/components/SecondarySidebar/SecondarySidebarList';
import { SecondarySidebarSection } from '@/components/SecondarySidebar/SecondarySidebarSection';
import { SecondarySidebarSectionTitle } from '@/components/SecondarySidebar/SecondarySidebarSectionTitle';
import { SubscriptionSidebarItem } from './SubscriptionSidebarItem';
import { UsageSidebarItem } from './UsageSidebarItem';

export function BillingSection() {
  return (
    <SecondarySidebarSection isLastSection>
      <SecondarySidebarSectionTitle>Billing</SecondarySidebarSectionTitle>
      <SecondarySidebarList>
        <SubscriptionSidebarItem />
        <UsageSidebarItem />
      </SecondarySidebarList>
    </SecondarySidebarSection>
  );
}
