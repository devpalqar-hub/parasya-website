export const SITE_URL = "https://palqar.com";

export const DEFAULT_OG_IMAGE = {
  url: "/hero-poster.png",
  width: 1200,
  height: 630,
  alt: "Palqar digital growth services",
};

export const DEFAULT_TWITTER_CARD = "summary_large_image";

export function absoluteUrl(path = "/") {
  if (!path) return SITE_URL;
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path.startsWith("/") ? path : `/${path}`, SITE_URL).toString();
}

export function buildCanonical(path) {
  return absoluteUrl(path);
}

export function buildAlternates({ canonicalPath, languages } = {}) {
  const alternates = {};

  if (canonicalPath) {
    alternates.canonical = buildCanonical(canonicalPath);
  }

  if (languages && Object.keys(languages).length > 0) {
    alternates.languages = Object.fromEntries(
      Object.entries(languages).map(([locale, value]) => [locale, absoluteUrl(value)]),
    );
  }

  return alternates;
}

export function buildRobots({
  index = true,
  follow = true,
  nocache = false,
  googleBot = {},
} = {}) {
  return {
    index,
    follow,
    nocache,
    googleBot: {
      index,
      follow,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
      ...googleBot,
    },
  };
}

function resolveOgImage(image, fallbackAlt) {
  if (!image) {
    return {
      ...DEFAULT_OG_IMAGE,
      url: absoluteUrl(DEFAULT_OG_IMAGE.url),
      alt: fallbackAlt || DEFAULT_OG_IMAGE.alt,
    };
  }

  if (typeof image === "string") {
    return {
      ...DEFAULT_OG_IMAGE,
      url: absoluteUrl(image),
      alt: fallbackAlt || DEFAULT_OG_IMAGE.alt,
    };
  }

  return {
    ...DEFAULT_OG_IMAGE,
    ...image,
    url: absoluteUrl(image.url || DEFAULT_OG_IMAGE.url),
    alt: image.alt || fallbackAlt || DEFAULT_OG_IMAGE.alt,
  };
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  ogImage,
  locale = "en_US",
  siteName = "Palqar",
  twitterCard = DEFAULT_TWITTER_CARD,
  languages,
  noindex = false,
  openGraph,
  twitter,
} = {}) {
  const canonical = buildCanonical(path);
  const image = resolveOgImage(ogImage, title);
  const robots = buildRobots({
    index: !noindex,
    follow: true,
  });

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: buildAlternates({
      canonicalPath: path,
      languages,
    }),
    robots,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      locale,
      type,
      images: [image],
      ...openGraph,
    },
    twitter: {
      card: twitterCard,
      title,
      description,
      images: [image.url],
      ...twitter,
    },
  };
}

export function buildServiceMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
  locale = "en_US",
  languages,
  noindex = false,
} = {}) {
  return buildMetadata({
    title,
    description,
    path,
    keywords,
    ogImage,
    locale,
    languages,
    noindex,
    type: "website",
  });
}

export function buildArticleMetadata({
  title,
  description,
  path,
  publishedTime,
  modifiedTime,
  ogImage,
  keywords,
  noindex = false,
} = {}) {
  return buildMetadata({
    title,
    description,
    path,
    keywords,
    ogImage,
    noindex,
    type: "article",
    openGraph: {
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      authors: ["Palqar Team"],
    },
  });
}

export function buildProjectMetadata({
  title,
  description,
  path,
  ogImage,
  keywords,
  noindex = false,
} = {}) {
  return buildMetadata({
    title,
    description,
    path,
    keywords,
    ogImage,
    noindex,
    type: "article",
  });
}
