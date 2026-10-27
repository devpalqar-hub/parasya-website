import { buildMetadata, buildCanonical } from "@/lib/seo";
import WorksClient from "./WorksClient";

export const metadata = buildMetadata({
  title: "Our Works | Palqar — Projects That Drive Real Growth",
  description:
    "Explore Palqar's portfolio of award-worthy projects — from AI-powered healthcare platforms to premium cleaning services and maternal wellness apps. Real work, real results.",
  path: "/works",
  keywords: [
    "Palqar portfolio",
    "web design projects",
    "branding case studies",
    "ZodoAI",
    "CleanMaria",
    "MomsMilk",
    "Bambini Doulas",
    "digital agency work",
    "UI/UX case studies",
  ],
});

export default function WorksPage() {
  return <WorksClient />;
}
