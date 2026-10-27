import { notFound } from "next/navigation";
import BlogPostClient from "@/components/blog/BlogPostClient";
import SchemaScript from "@/components/ui/SchemaScript";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";
import {
  buildSchemaGraph,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
  generateWebSiteSchema,
} from "@/lib/jsonLd";
import { buildArticleMetadata, buildCanonical } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Palqar",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildArticleMetadata({
    title: `${post.title} | Palqar`,
    description: post.description,
    path: `/blog/${post.slug}`,
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    ogImage: {
      url: post.heroImage,
      alt: post.title,
    },
    keywords: [post.category, "Palqar", "digital strategy", "editorial"],
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const url = buildCanonical(`/blog/${post.slug}`);
  // Prefer posts from the same topic cluster, then fall back to the rest.
  const others = blogPosts.filter((entry) => entry.slug !== post.slug);
  const relatedPosts = [
    ...others.filter((entry) => post.cluster && entry.cluster === post.cluster),
    ...others.filter((entry) => !post.cluster || entry.cluster !== post.cluster),
  ].slice(0, 2);

  const schema = buildSchemaGraph(
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateWebPageSchema({
      title: `${post.title} | Palqar`,
      description: post.description,
      url,
    }),
    generateArticleSchema({
      headline: post.title,
      description: post.description,
      url,
      image: post.heroImage,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: post.author,
      section: post.category,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: buildCanonical("/") },
      { name: "Blog", url: buildCanonical("/blog") },
      { name: post.title, url },
    ]),
    generateFAQSchema(post.faq),
  );

  return (
    <>
      <SchemaScript data={schema} />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}
