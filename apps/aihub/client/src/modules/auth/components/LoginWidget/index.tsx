import { LoginForm } from '../LoginForm';
import { LoginWidgetContainer } from './Container';
import { LoginWidgetHeader } from './Header';

export function LoginWidget() {
  return (
    <LoginWidgetContainer>
      <LoginWidgetHeader />
      <LoginForm />
    </LoginWidgetContainer>
  );
}
