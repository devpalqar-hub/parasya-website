import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import CaseBrief from "@/components/case-study/CaseBrief";
import CaseMediaGrid from "@/components/case-study/CaseMediaGrid";
import CaseProcess from "@/components/case-study/CaseProcess";
import CaseInnovation from "@/components/case-study/CaseInnovation";
import SchemaScript from "@/components/ui/SchemaScript";
import { projects } from "@/app/data/projects";
import CleanMaria from "@/app/project-pages/CleanMaria/CleanMaria";
import Zodo from "@/app/project-pages/Zodo/Zodo";
import Doulas from "@/app/project-pages/Doulas/Doulas";
import MomsMilk from "@/app/project-pages/MomsMilk/MomsMilk";
import MessMeals from "@/app/project-pages/MessMeals/MessMeals";
import CuddleMind from "@/app/project-pages/CuddleMind/CuddleMind";
import Raheeb from "@/app/project-pages/Raheeb/Raheeb";
import KingFox from "@/app/project-pages/KingFox/KingFox";
import { getProjectEntryBySlug, projectEntries } from "@/data/projectEntries";
import {
  buildSchemaGraph,
  generateBreadcrumbSchema,
  generateCreativeWorkSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
  generateWebSiteSchema,
} from "@/lib/jsonLd";
import { buildCanonical, buildProjectMetadata } from "@/lib/seo";
import styles from "./CaseStudy.module.css";

export const dynamicParams = false;

const specialProjectPages = {
  zodo: Zodo,
  bambinidoulas: Doulas,
  cleanmaria: CleanMaria,
  momsmilk: MomsMilk,
  messmeals: MessMeals,
  cuddlemind: CuddleMind,
  raheeb: Raheeb,
  kingfox: KingFox,
};

export function generateStaticParams() {
  return projectEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entry = getProjectEntryBySlug(slug);

  if (!entry) {
    return {
      title: "Project Not Found | Palqar",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildProjectMetadata({
    title: `${entry.title} | Palqar`,
    description: entry.description,
    path: `/projects/${entry.slug}`,
    ogImage: {
      url: entry.image,
      alt: entry.title,
    },
    keywords: [entry.client, entry.category, "Palqar case study"],
    noindex: !entry.indexable,
  });
}

function CaseStudySchema({ entry }) {
  const url = buildCanonical(`/projects/${entry.slug}`);

  const schema = buildSchemaGraph(
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateWebPageSchema({
      title: `${entry.title} | Palqar`,
      description: entry.description,
      url,
    }),
    generateCreativeWorkSchema({
      name: entry.title,
      description: entry.description,
      url,
      image: entry.image,
      client: entry.client,
      category: entry.category,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: buildCanonical("/") },
      { name: "Projects", url: buildCanonical("/#featured-projects") },
      { name: entry.title, url },
    ]),
  );

  return <SchemaScript data={schema} />;
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const entry = getProjectEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  const SpecialProjectPage = specialProjectPages[slug];
  if (SpecialProjectPage) {
    return (
      <>
        <CaseStudySchema entry={entry} />
        <SpecialProjectPage />
      </>
    );
  }

  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    notFound();
  }

  return (
    <>
      <CaseStudySchema entry={entry} />

      <main className={styles.wrapper}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <div className={styles.caseStudyWrapper}>
              <div className={styles.circle} />
              <h5 className={styles.caseStudy}>CASE STUDY</h5>
            </div>

            <h1>{project.title}</h1>
            <p className={styles.meta}>{project.subtitle}</p>
            <p className={styles.overview}>{project.desc}</p>
          </div>

          <div className={styles.heroImageWrapper}>
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className={styles.heroImage}
              priority
            />
          </div>
        </section>

        <CaseBrief data={project.brief} />

        {project.sections.map((section, index) => {
          const sectionNumber = String(index + 2).padStart(2, "0");

          return (
            <section
              key={section.title}
              className={`${styles.section} ${
                index % 2 !== 0 ? styles.reverse : ""
              }`}
            >
              <div className={styles.textBlock}>
                <div className={styles.tagRow}>
                  <span className={styles.number}>{sectionNumber}</span>
                  <span className={styles.label}>{section.label}</span>
                </div>

                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>

              <div className={styles.imageBlock}>
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className={styles.sectionImage}
                />
              </div>
            </section>
          );
        })}

        {project.mediaGallery ? <CaseMediaGrid data={project.mediaGallery} /> : null}
        {project.process ? <CaseProcess data={project.process} /> : null}
        {project.innovation ? <CaseInnovation data={project.innovation} /> : null}

        <section className={styles.initiateProject}>
          <div className={styles.column}>
            <span className={styles.lets}>
              LET&apos;S <span className={styles.talk}>TALK</span>
            </span>
            <Link href="/contact" className={styles.buttonWrapper}>
              <span>START A PROJECT</span>
              <div className={styles.arrowRight}>
                <ArrowRight />
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
