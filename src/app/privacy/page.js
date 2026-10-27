import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | Palqar",
  description:
    "Understand how Palqar handles website enquiries, contact information, and basic analytics data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main style={{ padding: "8rem 1.5rem 4rem", background: "#f6f4ef", color: "#111" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ margin: "0 0 1rem", fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8b5e34" }}>
          Legal
        </p>
        <h1 style={{ margin: 0, fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
          Privacy Policy
        </h1>
        <p style={{ marginTop: "1.5rem", lineHeight: 1.8, maxWidth: "70ch" }}>
          Palqar may collect contact details you voluntarily submit through forms,
          email, or direct outreach so we can respond to enquiries, discuss
          projects, and provide relevant follow-up. We may also use standard site
          analytics to understand performance and improve the website experience.
        </p>
        <p style={{ marginTop: "1rem", lineHeight: 1.8, maxWidth: "70ch" }}>
          We do not publish private enquiry information, and any project-specific
          confidentiality, data handling, or retention requirements should be
          defined in the engagement agreement. For privacy-related requests, please
          contact Palqar directly through the contact page.
        </p>
      </div>
    </main>
  );
}
