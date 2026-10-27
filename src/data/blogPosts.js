import { clusterPosts } from "./blogClusters";

const baseBlogPosts = [
  {
    slug: "future-of-digital-experiences",
    title: "Why Strategy? Where Direction Is Born.",
    excerpt:
      "A practical look at how strategic clarity shapes digital execution, product direction, and long-term growth decisions.",
    description:
      "Explore how Palqar approaches strategy as the operating discipline that gives design, technology, and growth work a clear direction.",
    category: "Strategy",
    publishedAt: "2026-02-24",
    updatedAt: "2026-02-24",
    author: "Palqar Team",
    authorRole: "Strategy Desk",
    accentColor: "#dc3545",
    heroImage: "/blog/future-of-digital-experiences.webp",
    featured: true,
    tagline:
      "Strategy is not a plan. It is a posture: the way an organisation chooses to meet the world.",
    toc: [
      { id: "what-strategy-means", label: "What Strategy means here" },
      { id: "how-strategy-behaves", label: "How Strategy is designed to behave" },
      { id: "what-strategy-makes", label: "What Strategy makes possible" },
      { id: "strategy-and-execution", label: "How Strategy works with Execution" },
      { id: "what-this-changes", label: "What this changes in how we operate" },
      { id: "conclusion", label: "Strategy" },
    ],
    content: [
      {
        id: "what-strategy-means",
        heading: "What Strategy means here",
        subheading: "Clarity, not comfort",
        body: [
          "Strategy at Palqar is not about presenting options. It is about making the hard choice of what to pursue and what to leave behind.",
          "Real strategy begins with an honest assessment of where you stand, what the market is doing, and where the gap between the two can be exploited.",
          "Every brief that enters our studio starts here. Before a single pixel is placed or a single line of code is written, the strategic question must be answered: why does this exist, and for whom?",
        ],
      },
      {
        id: "how-strategy-behaves",
        heading: "How Strategy is designed to behave",
        subheading: "Intentional, measurable, grounded",
        body: [
          "Strategy without accountability is just aspiration. We build strategic frameworks that have clear ownership, measurable signals, and explicit assumptions that can be tested.",
          "When a strategy is working, you can see it in the numbers, in the team's confidence, and in the way customers talk about the product.",
          "This is not about being right. It is about being honest quickly so you can adapt before the cost compounds.",
        ],
        pullQuote:
          "Strategy is the art of making fewer, better decisions and then protecting them.",
        image: "/about/story-2.jpg",
        imageCaption: "Strategic workshops at the Palqar studio, February 2026",
      },
      {
        id: "what-strategy-makes",
        heading: "What Strategy makes possible",
        subheading: "Leverage and compounding returns",
        body: [
          "The true return on strategic clarity is not a single campaign or launch. It is the compounding effect of a team that knows exactly why it is doing what it is doing.",
          "Aligned teams move faster. Aligned products resonate deeper. Aligned brands build equity that no single piece of design or copy can manufacture on its own.",
          "Clients who invest in strategic foundation before execution consistently outperform those who jump straight to deliverables.",
        ],
      },
      {
        id: "strategy-and-execution",
        heading: "How Strategy works with Execution",
        subheading: "Two halves of one discipline",
        body: [
          "At Palqar, strategy and execution are not departments. They are phases of the same thinking. The strategist must understand what is buildable, and the builder must understand why they are building it.",
          "This cross-contamination of responsibility is intentional. It removes the costly handoff gap where meaning is lost in translation.",
          "Our process keeps strategy present throughout: in design critiques, in development sprints, and in launch retrospectives.",
        ],
        image: "/about/story-3.jpg",
        imageCaption: "Cross-functional strategy session at Palqar",
      },
      {
        id: "what-this-changes",
        heading: "What this changes in how we operate",
        subheading: "Ownership over output",
        body: [
          "When everyone in a studio understands the strategic intent behind their work, accountability shifts from output alone to outcome.",
          "Designers stop asking whether something simply looks good and start asking whether it serves the objective.",
          "It also changes how we talk to clients. We are not order-takers. We are partners in a shared outcome.",
        ],
      },
      {
        id: "conclusion",
        heading: "Strategy",
        subheading: "The discipline that makes everything else matter",
        body: [
          "Without strategy, creativity is noise. Without strategy, technology is infrastructure without a destination.",
          "This is why we put it first. Not because we are trying to make things complicated, but because we are trying to make things matter.",
          "Strategy is where Palqar begins every engagement. It is how we earn the right to everything that comes after.",
        ],
      },
    ],
    faq: [
      {
        q: "Why does strategy matter before design or development?",
        a: "Because it sets the objective, the audience, and the decision criteria that make later execution more coherent and measurable.",
      },
      {
        q: "Does strategy only apply to large transformation projects?",
        a: "No. Even smaller sites, campaigns, and service restructures benefit from having a clear direction before execution begins.",
      },
      {
        q: "Can strategy and implementation happen together?",
        a: "Yes, but the strongest delivery usually happens when strategic assumptions remain visible and testable throughout the build.",
      },
    ],
  },
];

export const blogPosts = [...baseBlogPosts, ...clusterPosts];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}
