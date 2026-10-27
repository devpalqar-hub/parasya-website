import ServicesPage from "../../qa/services/page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Services | Palqar USA",
  description:
    "Regional services overview for the United States. This route stays crawlable for users but is excluded from indexing until region-specific content is published.",
  path: "/qa/services",
  noindex: true,
});

export default ServicesPage;
