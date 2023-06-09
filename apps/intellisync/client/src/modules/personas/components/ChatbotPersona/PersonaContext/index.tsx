import { Textarea } from 'tailwind-ui';

const activity = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

export function PersonaContext() {
  return (
    <>
      <h2 className="text-sm font-semibold leading-6 dark:text-white">
        Context
      </h2>
      <ul role="list" className="mt-6 space-y-6">
        {activity.map((activityItem) => (
          <li key={activityItem.id} className="relative flex gap-x-4">
            <div className="-bottom-6 absolute left-0 top-0 flex w-6 justify-center">
              <div className="w-px dark:bg-grayScheme-50/10" />
            </div>
            <>
              <div className="relative flex h-6 w-6 flex-none items-center justify-center dark:bg-grayScheme-950">
                <div className="h-1.5 w-1.5 rounded-full dark:bg-grayScheme-700 ring-1 dark:ring-grayScheme-900" />
              </div>
              <div className="relative flex-auto">
                <Textarea
                  colorScheme="emerald"
                  className="resize-none"
                  rows={2}
                  name="comment"
                  id="comment"
                  placeholder="Add context..."
                  defaultValue={'This is a context message'}
                />
              </div>
            </>
          </li>
        ))}
        <li className="relative flex gap-x-4">
          <div className="h-6 absolute left-0 top-0 flex w-6 justify-center">
            <div className="w-px dark:bg-grayScheme-50/10" />
          </div>
          <>
            <div className="relative flex h-6 w-6 flex-none items-center justify-center dark:bg-grayScheme-950">
              <div className="h-1.5 w-1.5 rounded-full dark:bg-grayScheme-700 ring-1 dark:ring-grayScheme-900" />
            </div>
          </>
        </li>
      </ul>
    </>
  );
}
