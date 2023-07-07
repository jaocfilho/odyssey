import { WaitlistForm } from '../WaitlistForm';

export function NotifiedArea() {
  return (
    <div className="bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block">
            Get notified when we’re launching.
          </h2>
        </div>
        <div className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
}
