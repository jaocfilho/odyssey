import { Button } from '@/components/Buttons/Button';
import { AppsLink } from '@/modules/navigation/components/AppsLink';

export function ButtonsArea() {
  return (
    <div className="mt-6 flex items-center justify-end gap-x-6">
      <AppsLink>
        <button type="button" className="text-sm font-semibold leading-6">
          Cancel
        </button>
      </AppsLink>
      <Button type="submit">Save</Button>
    </div>
  );
}
