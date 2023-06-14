import { PageTitle } from '@/components/PageTitle';
import { ApiSettings } from '../../ApiSettings';

export function SettingsPage() {
  return (
    <div className="flex flex-col flex-1">
      <div className="min-w-0 flex-1 px-4 pt-8 sm:px-6 lg:px-8">
        <PageTitle>API settings</PageTitle>
      </div>
      <ApiSettings />
    </div>
  );
}
