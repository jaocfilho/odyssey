import { Button } from "milky-ui";

import { AuthenticatedPageShell } from "../modules/auth";

export default function Web() {
  return (
    <AuthenticatedPageShell>
      <div>
        <h1>Web</h1>
        <Button size="medium" variant="solid" color="teal">
          solid
        </Button>
      </div>
    </AuthenticatedPageShell>
  );
}
