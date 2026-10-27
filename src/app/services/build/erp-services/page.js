import ErpServicePage, { buildErpMetadata } from "@/components/services/ErpServicePage";

export const metadata = buildErpMetadata("global");

export default function Page() {
  return <ErpServicePage regionKey="global" />;
}
