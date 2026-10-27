import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us | Get in Touch with Palqar",
  description:
    "Reach out for a work enquiry, customer support, or partnership opportunities. We respond within 24 hours.",
  path: "/contact",
});

export default function ContactLayout({ children }) {
  return children;
}
