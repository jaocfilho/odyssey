import { AuthenticatedPageShell } from "../modules/pageShells";
import { Roadmap } from "../modules/roadmap";

export default function Web() {

  return (
    <AuthenticatedPageShell>
      <Roadmap />
    </AuthenticatedPageShell>
  );
}
