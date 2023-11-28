import { LoginFormContainer } from './Container';
import { ButtonsArea } from './ButtonsArea';
import { LoginFormComponent } from './Form';
import { Separator } from './Separator';
import { FreeTrial } from './FreeTrial';

export function LoginForm() {
  return (
    <LoginFormContainer>
      <LoginFormComponent />

      {/* <div>
        <Separator />
        <ButtonsArea />
      </div> */}

      <FreeTrial />
    </LoginFormContainer>
  );
}
