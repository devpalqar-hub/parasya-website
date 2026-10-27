import ServiceTemplate from "@/components/services/serviceTemplate";
import { reputationManagementContent } from "@/data/services/digitalMarketing/reputation-management";
import { buildCanonicalServiceMetadata } from "@/lib/serviceRoutes";

export const metadata = buildCanonicalServiceMetadata(
  reputationManagementContent.meta,
  "/qa/services/digital-marketing/reputation-management",
  "en_QA",
);

metadata.robots = {
  index: false,
  follow: true,
  googleBot: {
    index: false,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function ReputationManagementPage() {
  return (
    <ServiceTemplate
      category="digital-marketing"
      service="reputation-management"
      content={reputationManagementContent}
    />
  );
}
