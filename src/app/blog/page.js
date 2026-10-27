import BlogIndexClient from "@/components/blog/BlogIndexClient";
import SchemaScript from "@/components/ui/SchemaScript";
import { blogPosts } from "@/data/blogPosts";
import {
  buildSchemaGraph,
  generateBreadcrumbSchema,
  generateCollectionPageSchema,
  generateItemListSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/jsonLd";
import { buildMetadata, buildCanonical } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog | Insights & Ideas from Palqar",
  description:
    "Explore Palqar articles on strategy, digital execution, growth systems, and the thinking behind scalable digital experiences.",
  path: "/blog",
  ogImage: {
    url: "/hero-poster.png",
    alt: "Palqar blog and editorial insights",
  },
});

export default function BlogPage() {
  const url = buildCanonical("/blog");
  const schema = buildSchemaGraph(
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateCollectionPageSchema({
      title: "Palqar Blog",
      description:
        "Editorial insights from Palqar on strategy, digital growth, and scalable online experiences.",
      url,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: buildCanonical("/") },
      { name: "Blog", url },
    ]),
    generateItemListSchema(
      blogPosts.map((post) => ({
        name: post.title,
        url: buildCanonical(`/blog/${post.slug}`),
        description: post.excerpt,
      })),
      "Palqar Blog Posts",
      "Published editorial insights from the Palqar team.",
    ),
  );

  return (
    <>
      <SchemaScript data={schema} />
      <BlogIndexClient posts={blogPosts} />
    </>
  );
}
