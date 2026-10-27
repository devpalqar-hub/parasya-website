import ServiceTemplate from "@/components/services/serviceTemplate";
import { emailMarketingContent } from "@/data/services/digitalMarketing/email-marketing";
import { buildCanonicalServiceMetadata } from "@/lib/serviceRoutes";

export const metadata = buildCanonicalServiceMetadata(
  emailMarketingContent.meta,
  "/qa/services/digital-marketing/email-marketing",
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

export default function EmailMarketingPage() {
  return (
    <ServiceTemplate
      category="digital-marketing"
      service="email-marketing"
      content={emailMarketingContent}
    />
  );
}
