import ServiceTemplate from "@/components/services/serviceTemplate";
import { ssmContent } from "@/data/services/digitalMarketing/ssm";
import { buildCanonicalServiceMetadata } from "@/lib/serviceRoutes";

export const metadata = buildCanonicalServiceMetadata(
  ssmContent.meta,
  "/qa/services/digital-marketing/ssm",
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

export default function SSMPage() {
  return (
    <ServiceTemplate
      category="digital-marketing"
      service="ssm"
      content={ssmContent}
    />
  );
}
