import { Logo } from '../../../../../components';
import { ActionsArea } from '../ActionsArea';

export const PageHeader = () => {
  return (
    <div className="flex flex-col px-6 border-b-2 border-b-gray-200 dark:border-b-gray-600">
      <div className="flex w-full justify-between my-2">
        <Logo />
        <ActionsArea />
      </div>
    </div>
  );
};
