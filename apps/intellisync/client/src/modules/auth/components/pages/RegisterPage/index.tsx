import { LoginForm } from '../../LoginForm';
import { RegisterHeader } from '../../RegisterHeader';

export function RegisterPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <RegisterHeader />
      <LoginForm />
    </div>
  );
}
