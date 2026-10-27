/**
 * BreadcrumbSchema — renders a BreadcrumbList JSON-LD script tag.
 *
 * @param {{ items: Array<{ name: string, url: string }> }} props
 *   `items` should be ordered root → current page.
 *   Example: [{ name: "Home", url: "https://palqar.com" }, { name: "Services", url: "https://palqar.com/services" }]
 */
export default function BreadcrumbSchema({ items }) {
  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
