import ErpServicePage, { buildErpMetadata } from "@/components/services/ErpServicePage";

export const metadata = buildErpMetadata("usa");

export default function Page() {
  return <ErpServicePage regionKey="usa" />;
}
