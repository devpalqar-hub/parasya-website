import dynamic from 'next/dynamic';
import styles from "./page.module.css";
import Hero from "@/components/sections/Hero/Hero";
import SchemaScript from "@/components/ui/SchemaScript";
import {
  buildSchemaGraph,
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
  generateWebSiteSchema,
} from "@/lib/jsonLd";
import { buildCanonical, buildMetadata } from "@/lib/seo";

// Dynamically import heavy components to reduce initial JS payload
const FeaturedProjects = dynamic(() => import("@/components/sections/FeaturedProjects/FeaturedProjects"));
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection/ProcessSection"));
const ServicesPreview = dynamic(() => import("@/components/sections/Services/ServicesPreview"));
const WhySection = dynamic(() => import("@/components/sections/WhySection/WhySection"));
const Showcase = dynamic(() => import("@/components/sections/Showcase.js/Showcase"));
// const TestimonialsPage = dynamic(() => import("@/components/sections/Testimonials/Testimonials"));
const TextSection = dynamic(() => import("@/components/sections/TextSection/TextSection"));
const TechLoopSection = dynamic(() => import("@/components/sections/TechLoopSection/TechLoopSection"));
const TrustSection = dynamic(() => import("@/components/sections/TrustSection/TrustSection"));

const VideoSection = dynamic(() => import("@/components/sections/VideoSection/VideoSection"));

export const metadata = buildMetadata({
  title: "Palqar | Web Development, Branding, Marketing & Growth",
  description:
    "Palqar helps ambitious businesses grow with custom web development, branding, performance marketing, automation, and growth strategy.",
  path: "/",
  keywords: [
    "digital agency",
    "performance marketing",
    "business growth strategy",
    "automation services",
    "UI/UX design",
    "web development",
    "Palqar",
    "branding",
  ],
});

export default function Home() {
  const url = buildCanonical("/");
  const structuredData = buildSchemaGraph(
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebSiteSchema(),
    generateWebPageSchema({
      title: "Palqar | Web Development, Branding, Marketing & Growth",
      description:
        "Palqar helps ambitious businesses grow with custom web development, branding, performance marketing, automation, and growth strategy.",
      url,
    }),
    generateBreadcrumbSchema([{ name: "Home", url }]),
  );

  return (
    <main className={styles.page}>
      <SchemaScript data={structuredData} />
      <Hero />
      <TechLoopSection />
      <TrustSection />
      <ProcessSection />
      <TextSection />
      <VideoSection />
      <ServicesPreview />
      <FeaturedProjects />
      <WhySection />
      {/* <TestimonialsPage /> */}
      {/* <Showcase /> */}
    </main>
  );
}
