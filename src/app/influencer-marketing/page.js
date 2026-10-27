import ServiceTemplate from "@/components/services/serviceTemplate";
import { influencerMarketingContent } from "@/data/services/digitalMarketing/influencer-marketing";
import { buildCanonicalServiceMetadata } from "@/lib/serviceRoutes";

export const metadata = buildCanonicalServiceMetadata(
  influencerMarketingContent.meta,
  "/qa/services/digital-marketing/influencer-marketing",
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

export default function InfluencerMarketingPage() {
  return (
    <ServiceTemplate
      category="digital-marketing"
      service="influencer-marketing"
      content={influencerMarketingContent}
    />
  );
}
