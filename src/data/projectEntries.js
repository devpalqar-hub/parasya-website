export const projectEntries = [
  {
    slug: "zodo",
    title: "ZodoAI Case Study",
    description:
      "A closer look at how Palqar designed and delivered the ZodoAI product experience across web and mobile touchpoints.",
    image: "/featured-projects/zodo/laptop.png",
    client: "ZodoAI",
    category: "HealthTech Product Experience",
    indexable: true,
  },
  {
    slug: "cleanmaria",
    title: "CleanMaria Case Study",
    description:
      "See how Palqar combined branding, growth systems, and operational tooling for the CleanMaria platform.",
    image: "/featured-projects/cleanmaria/hero-clean.webp",
    client: "CleanMaria",
    category: "Home Services Growth Platform",
    indexable: true,
  },
  {
    slug: "bambinidoulas",
    title: "Bambini Doulas Case Study",
    description:
      "Explore the brand, experience, and product decisions behind the Bambini Doulas case study.",
    image: "/featured-projects/bambinidoulas/laptop.png",
    client: "Bambini Doulas",
    category: "Care Services Brand Experience",
    indexable: true,
  },
  {
    slug: "momsmilk",
    title: "MomsMilk Case Study",
    description:
      "How Palqar rebranded MomsMilk into a connected care ecosystem for modern families.",
    image: "/projects/momsmilk/momsmilk-hero.jpg",
    client: "MomsMilk",
    category: "Maternal Care Product Experience",
    indexable: true,
  },
  {
    slug: "messmeals",
    title: "MessMeals Case Study",
    description:
      "MessMeals connects people with trusted local messes, and gives mess owners one app to manage menus, customers, deliveries and revenue.",
    image: "/featured-projects/messmeals/hero-web.png",
    client: "MessMeals",
    category: "Food Tech Platform",
    indexable: true,
  },
  {
    slug: "cuddlemind",
    title: "CuddleMind Case Study",
    description:
      "CuddleMind connects you with trusted, qualified mental health professionals through secure chat and video consultations.",
    image: "/featured-projects/cuddlemind/hero-app.png",
    client: "CuddleMind",
    category: "Mental Wellness Platform",
    indexable: true,
  },
  {
    slug: "kingfox",
    title: "KingFox Case Study",
    description:
      "KingFox is a streetwear brand with a customer storefront, a warehouse admin, a billing setup and an Android app for supervisors.",
    image: "/featured-projects/kingfox/kingfoxwork.png",
    client: "KingFox",
    category: "Retail Commerce Platform",
    indexable: true,
  },
  {
    slug: "raheeb",
    title: "Raheeb Case Study",
    description:
      "A comprehensive look at Palqar's product and experience design for Raheeb.",
    image: "/featured-projects/raheeb/hero-web.png",
    client: "Raheeb",
    category: "Experience Design",
    indexable: true,
  },
  {
    slug: "vivodyne",
    title: "Vivodyne Case Study",
    description:
      "An overview of Palqar's concept and interface work for Vivodyne.",
    image: "/featured-projects/Vivodyne.png",
    client: "Vivodyne",
    category: "Biotech Experience Design",
    indexable: false,
  },
  {
    slug: "Lovethesales",
    title: "Love the Sales Case Study",
    description:
      "A placeholder overview for the Love the Sales engagement.",
    image: "/featured-projects/Lovethesaleslap.png",
    client: "Love the Sales",
    category: "Commerce Experience",
    indexable: false,
  },
  {
    slug: "Creek-Wearable",
    title: "Creek Wearable Case Study",
    description:
      "A placeholder overview for the Creek Wearable engagement.",
    image: "/featured-projects/CreekWearable.png",
    client: "Creek Wearable",
    category: "Wearable Product Design",
    indexable: false,
  },
];

export function getProjectEntryBySlug(slug) {
  return projectEntries.find((entry) => entry.slug === slug) ?? null;
}
