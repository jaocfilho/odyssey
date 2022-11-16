import { AuthenticatedPageShell } from "../modules/auth";
import { RoadmapRow } from "../modules/roadmap";

export default function Web() {
  const cells = [
    { color: "purple", type: "starting" },
    { color: "purple", type: "progress" },
    { color: "purple", type: "ending" },
    { color: "purple", type: "empty" },
  ];

  return (
    <AuthenticatedPageShell>
      <RoadmapRow cells={cells} />
    </AuthenticatedPageShell>
  );
}
