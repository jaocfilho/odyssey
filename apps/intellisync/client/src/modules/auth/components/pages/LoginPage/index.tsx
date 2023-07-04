import { LoginForm } from '../../LoginForm';
import { LoginHeader } from '../../LoginHeader';

export function LoginPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <LoginHeader />
      <LoginForm />
    </div>
  );
}
