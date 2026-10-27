import ServiceTemplate from "@/components/services/serviceTemplate";
import { performanceMarketingContent } from "@/data/services/digitalMarketing/performance-marketing";
import { buildCanonicalServiceMetadata } from "@/lib/serviceRoutes";

export const metadata = buildCanonicalServiceMetadata(
  performanceMarketingContent.meta,
  "/qa/services/digital-marketing/performance-marketing",
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

export default function PerformanceMarketingPage() {
  return (
    <ServiceTemplate
      category="digital-marketing"
      service="performance-marketing"
      content={performanceMarketingContent}
    />
  );
}
