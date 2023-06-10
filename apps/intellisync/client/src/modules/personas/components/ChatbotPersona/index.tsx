import { ContextArea } from './ContextArea';

export function ChatbotPersona() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Invoice */}
          <div className="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16">
            <h2 className="text-base font-semibold leading-6 dark:text-white">
              Invoice
            </h2>
            <dl className="mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
              <div className="sm:pr-4">
                <dt className="inline text-gray-500">Issued on</dt>{' '}
                <dd className="inline dark:text-grayScheme-400">
                  <time dateTime="2023-23-01">January 23, 2023</time>
                </dd>
              </div>
              <div className="mt-2 sm:mt-0 sm:pl-4">
                <dt className="inline text-gray-500">Due on</dt>{' '}
                <dd className="inline dark:text-grayScheme-400">
                  <time dateTime="2023-31-01">January 31, 2023</time>
                </dd>
              </div>
              <div className="mt-6 border-t border-gray-900/5 pt-6 sm:pr-4">
                <dt className="font-semibold dark:text-white">From</dt>
                <dd className="mt-2 text-gray-500">
                  <span className="font-medium dark:text-white">
                    Acme, Inc.
                  </span>
                  <br />
                  7363 Cynthia Pass
                  <br />
                  Toronto, ON N3Y 4H8
                </dd>
              </div>
              <div className="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pl-4 sm:pt-6">
                <dt className="font-semibold dark:text-white">To</dt>
                <dd className="mt-2 text-gray-500">
                  <span className="font-medium dark:text-white">
                    Tuple, Inc
                  </span>
                  <br />
                  886 Walter Street
                  <br />
                  New York, NY 12345
                </dd>
              </div>
            </dl>
          </div>

          <ContextArea />
        </div>
      </div>
    </main>
  );
}
