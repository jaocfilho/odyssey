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
                <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                  <label htmlFor="comment" className="sr-only">
                    Add context
                  </label>
                  <textarea
                    rows={2}
                    name="comment"
                    id="comment"
                    className="block w-full resize-none border-0 bg-transparent py-1.5 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Add context..."
                    defaultValue={''}
                    value="This is just a test comment"
                  />
                </div>
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
