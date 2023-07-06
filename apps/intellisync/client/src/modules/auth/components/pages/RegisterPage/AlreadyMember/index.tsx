import { LoginLink } from '@/modules/navigation/components/LoginLink';

export function AlreadyMember() {
  return (
    <p className="mt-10 text-center text-sm text-grayScheme-500 dark:text-grayScheme-400">
      Already a member?{' '}
      <LoginLink className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
        Sign in to your account
      </LoginLink>
    </p>
  );
}
