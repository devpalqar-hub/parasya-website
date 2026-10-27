import ErpServicePage, { buildErpMetadata } from "@/components/services/ErpServicePage";

export const metadata = buildErpMetadata("in");

export default function Page() {
  return <ErpServicePage regionKey="in" />;
}
