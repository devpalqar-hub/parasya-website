import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions | Palqar",
  description:
    "Review the core terms that govern the use of Palqar's website, enquiries, and service engagements.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main style={{ padding: "8rem 1.5rem 4rem", background: "#f6f4ef", color: "#111" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ margin: "0 0 1rem", fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8b5e34" }}>
          Legal
        </p>
        <h1 style={{ margin: 0, fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
          Terms & Conditions
        </h1>
        <p style={{ marginTop: "1.5rem", lineHeight: 1.8, maxWidth: "70ch" }}>
          By using palqar.com or contacting Palqar through this website, you agree
          to use the site lawfully, provide accurate information in enquiries, and
          respect any intellectual property, content, and materials presented on
          the site. Project terms, pricing, delivery scope, and support commitments
          are finalized separately in written proposals or service agreements.
        </p>
        <p style={{ marginTop: "1rem", lineHeight: 1.8, maxWidth: "70ch" }}>
          If you need clarification on commercial terms, timelines, or usage
          permissions, the fastest route is to contact our team directly before
          relying on website content as a binding service commitment.
        </p>
      </div>
    </main>
  );
}
