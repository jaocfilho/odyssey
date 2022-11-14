import { AuthenticatedPageShell } from "../modules/auth";
import { RoadmapCell } from "../modules/roadmap";

export default function Web() {
  return (
    <AuthenticatedPageShell>
      <RoadmapCell color="purple" type="solo"  />
    </AuthenticatedPageShell>
  );
}
