import SchemaScript from "@/components/ui/SchemaScript";
import {
  buildSchemaGraph,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/jsonLd";
import { buildCanonical, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us | Meet the Palqar Team",
  description:
    "Learn about Palqar's philosophy, mission, leadership team, and the journey behind the digital agency redefining growth-focused web experiences.",
  path: "/about",
  ogImage: {
    url: "/about/about-team.webp",
    alt: "The Palqar team gathered in our studio",
  },
});

export default function AboutLayout({ children }) {
  const url = buildCanonical("/about");
  const aboutSchema = buildSchemaGraph(
    generateOrganizationSchema(),
    generateWebPageSchema({
      title: "About Us | Meet the Palqar Team",
      description:
        "Learn about Palqar's philosophy, mission, leadership team, and the journey behind the digital agency redefining growth-focused web experiences.",
      url,
    }),
    {
      "@type": "AboutPage",
      "@id": `${url}/#about`,
      name: "About Palqar",
      url,
      mainEntity: {
        "@type": "Organization",
        "@id": "https://palqar.com/#organization",
        name: "Palqar",
        url: "https://palqar.com",
        foundingDate: "2023",
        foundingLocation: {
          "@type": "Place",
          name: "Kozhikode, Kerala, India",
        },
        description:
          "Palqar is a full-service digital growth company combining technology, marketing, creativity, and consulting to help businesses scale visibility, leads, and revenue.",
        member: [
          {
            "@type": "Person",
            name: "Murali",
            jobTitle: "Founder",
            worksFor: { "@id": "https://palqar.com/#organization" },
            image: "https://palqar.com/whysection/murali.png",
          },
          {
            "@type": "Person",
            name: "Rishan",
            jobTitle: "Chief Executive Officer",
            worksFor: { "@id": "https://palqar.com/#organization" },
            image: "https://palqar.com/whysection/image1.png",
          },
          {
            "@type": "Person",
            name: "Anandhu",
            jobTitle: "Team Lead",
            worksFor: { "@id": "https://palqar.com/#organization" },
            image: "https://palqar.com/whysection/anandhu.png",
          },
          {
            "@type": "Person",
            name: "Reema",
            jobTitle: "Associate Team Lead",
            worksFor: { "@id": "https://palqar.com/#organization" },
            image: "https://palqar.com/whysection/reema1.png",
          },
        ],
      },
    },
    generateBreadcrumbSchema([
      { name: "Home", url: buildCanonical("/") },
      { name: "About", url },
    ]),
  );

  return (
    <>
      <SchemaScript data={aboutSchema} />
      {children}
    </>
  );
}
