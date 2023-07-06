import Link from 'next/link';

export function FreeTrial() {
  return (
    <p className="mt-10 text-center text-sm text-grayScheme-500 dark:text-grayScheme-400">
      Not a member?{' '}
      <Link
        href="/register"
        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
      >
        Create a free account
      </Link>
    </p>
  );
}
