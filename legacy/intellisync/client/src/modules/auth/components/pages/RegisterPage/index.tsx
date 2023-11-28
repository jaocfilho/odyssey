import { Button } from 'cosmic-ui';
import { RegisterForm } from '../../RegisterForm';
import { RegisterHeader } from '../../RegisterHeader';
import { AlreadyMember } from './AlreadyMember';

export function RegisterPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <RegisterHeader />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="px-6 shadow sm:rounded-lg sm:px-12">
          <RegisterForm />
          <div>
            <Button
              form="registerForm"
              type="submit"
              colorScheme="indigo"
              className="mt-6 w-full"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
      <AlreadyMember />
    </div>
  );
}
