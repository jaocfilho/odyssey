import { AuthenticatedPageShell } from "../modules/auth";
import { Roadmap } from "../modules/roadmap";

export default function Web() {

  return (
    <AuthenticatedPageShell>
      <Roadmap />
    </AuthenticatedPageShell>
  );
}
