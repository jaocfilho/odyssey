export function RegisterHeader() {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight dark:text-white">
        Create your account
      </h2>
      <p className="mt-4 text-center text-md text-grayScheme-500 dark:text-grayScheme-400">
        Let's get started with your free account.
      </p>
    </div>
  );
}
