import { LoginFormContainer } from './Container';
import { ButtonsArea } from './ButtonsArea';
import { LoginFormComponent } from './Form';

export function LoginForm() {
  return (
    <LoginFormContainer>
      <LoginFormComponent />

      <div>
        <div className="relative mt-10">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t dark:border-white/10" />
          </div>
          <div className="relative flex justify-center text-sm font-medium leading-6">
            <span className="px-6 dark:text-zinc-400">Or continue with</span>
          </div>
        </div>

        <ButtonsArea />
      </div>
    </LoginFormContainer>
  );
}
