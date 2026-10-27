// Supporting articles, grouped into topic clusters. Each cluster has a pillar
// article and supporting posts that link to each other and to the matching
// service page. Topics are adapted from our partner company Koncepts Lab
// (konceptslab.com) and rewritten in Palqar's voice.

const PUBLISHED = "2026-10-15";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function buildPost(post) {
  const content = post.content.map((section) => ({
    ...section,
    id: section.id ?? slugify(section.heading),
  }));

  return {
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    author: "Palqar Team",
    featured: false,
    ...post,
    content,
    toc: content.map(({ id, heading }) => ({ id, label: heading })),
  };
}

export const blogClusters = {
  web: "Web Development",
  "ai-product": "AI & Product",
  "growth-marketing": "Growth Marketing",
};

export const clusterPosts = [
  // ───────────────────────── Cluster: Web development ─────────────────────────
  buildPost({
    slug: "what-makes-a-website-successful",
    cluster: "web",
    pillar: true,
    title: "What Makes a Website Truly Successful?",
    category: "Web Development",
    excerpt:
      "Design is only one part of a website that works. Here are the eight things that decide whether a site earns its keep, and how to pick a partner who builds them in.",
    description:
      "What makes a website successful: usability, mobile responsiveness, speed, SEO, content, calls to action, security and scalability, plus how to choose a development partner.",
    authorRole: "Web Engineering",
    accentColor: "#dc3545",
    heroImage: "/blog/what-makes-a-website-successful.webp",
    tagline:
      "A good-looking website is easy. One that loads fast, ranks, converts and keeps growing with the business is the real brief.",
    content: [
      {
        heading: "A website is a business system, not a brochure",
        subheading: "Start from what it has to achieve",
        body: [
          "A successful website helps a business reach measurable goals: enquiries, sales, bookings, sign-ups. It does that through a smooth experience, fast loading, solid search visibility and content that answers real questions.",
          "Most underperforming sites are not ugly. They were designed without a clear job to do, or built on foundations that cannot support the next stage of growth.",
        ],
      },
      {
        heading: "The eight ingredients",
        subheading: "What to check on any website, new or old",
        body: [
          "Usable design: visitors should understand what you offer and where to go next within seconds. Clear navigation, readable layouts and one obvious action per page do more than decoration.",
          "Mobile responsiveness: most visitors arrive on a phone. Layouts, forms, menus and images should adapt properly, not merely shrink.",
          "Performance: slow pages lose visitors and rankings. Optimised images, efficient code, caching and reliable hosting should be planned from the start, not patched in at the end.",
          "SEO-ready structure: logical URLs, a clean heading hierarchy, crawlable content and internal linking give search engines something to work with.",
          "Useful content: say what you offer, who it is for, why you, how it works and how to get in touch.",
          "Strong calls to action: tell people the next step, whether that is requesting a quote, booking a consultation or starting a trial.",
          "Security: SSL, secure authentication, regular updates, backups and protection against common vulnerabilities.",
          "Scalability: choose technology that lets you add ecommerce, portals, integrations or automation later without a rebuild.",
        ],
        pullQuote:
          "Performance, SEO and security are cheapest when they are designed in on day one.",
      },
      {
        heading: "How to choose a web development partner",
        subheading: "Questions worth asking before you sign",
        body: [
          "Look at relevant work, not just a portfolio of screenshots. Ask how they handle SEO during the build, who owns design and development together, and how performance is measured before launch.",
          "Ask how communication works: who you talk to, how often you see progress and how changes are handled. Finally, ask what happens after launch, because updates, monitoring and backups never stop.",
        ],
        links: [
          {
            label: "Website & CMS Solutions",
            href: "/services/build/website-cms-solutions",
          },
          {
            label: "Design & Experience",
            href: "/services/experience/design-experience",
          },
          { label: "What is website testing?", href: "/blog/what-is-website-testing" },
        ],
      },
      {
        heading: "Plan for what comes after launch",
        subheading: "A website is never finished",
        body: [
          "Content changes, search algorithms shift and customers expect more every year. Budget for ongoing maintenance, performance monitoring and continuous improvement from the start.",
          "Sites that keep earning their place treat launch as the first release, then use analytics and user feedback to decide what to improve next.",
        ],
      },
    ],
    faq: [
      {
        q: "How long does website development take?",
        a: "A standard business website usually takes four to ten weeks, depending on design complexity and CMS features. Larger custom builds take longer.",
      },
      {
        q: "Is SEO included in website development?",
        a: "SEO should be built in: site structure, page speed, mobile responsiveness, headings, URLs and internal links all influence how well a site can rank.",
      },
      {
        q: "Can an existing website be redesigned instead of rebuilt?",
        a: "Often yes. A redesign can improve visual appearance, usability, performance, security and search visibility without losing existing content or rankings.",
      },
    ],
  }),

  buildPost({
    slug: "what-is-website-testing",
    cluster: "web",
    title: "What Is Website Testing? Types, Process and Checklist",
    category: "Web Development",
    excerpt:
      "Website testing finds problems before your customers do. A plain-language guide to the main test types, manual versus automated testing and a pre-launch checklist.",
    description:
      "What website testing is, why it matters, the main types (functional, usability, performance, compatibility, responsive, security), and a practical pre-launch checklist.",
    authorRole: "Quality Engineering",
    accentColor: "#111111",
    heroImage: "/blog/what-is-website-testing.webp",
    tagline:
      "Every broken form and slow page is a lost customer. Testing is how you find them first.",
    content: [
      {
        heading: "What website testing is",
        subheading: "Checking that it works for real people",
        body: [
          "Website testing is the process of checking that a site works as intended, before and after launch. It covers functionality, usability, performance, security, compatibility and responsiveness.",
          "The goal is simple: a site that is reliable, secure and easy to use on the browsers and devices your customers actually have.",
        ],
      },
      {
        heading: "Why it matters",
        subheading: "Quality is a business outcome",
        body: [
          "Testing reduces bugs and support complaints, protects against common security flaws, and keeps pages fast under real traffic. It also supports SEO, because search engines favour fast, mobile-friendly sites with fewer errors.",
        ],
      },
      {
        heading: "The main types of testing",
        subheading: "Each answers a different question",
        body: [
          "Functional testing checks that features behave as specified: logins, forms, search, carts, payments, menus and links.",
          "Usability testing asks whether people can find and do what they came for, with clear navigation, readable text and accessible design.",
          "Performance testing measures load speed, server response, stability and how the site copes with traffic spikes.",
          "Compatibility and responsive testing confirm that the site works across browsers, operating systems and screen sizes, from phones to desktops.",
          "Security testing reviews authentication, data encryption, password handling and vulnerabilities such as injection and cross-site scripting.",
        ],
      },
      {
        heading: "Manual or automated?",
        subheading: "Most teams need both",
        body: [
          "Manual testing is best for usability, exploratory checks and visual review, though it is slow and repetitive. Automated testing is fast and accurate for regression checks, but needs setup and maintenance.",
          "A practical approach is to automate the stable, repetitive checks and keep people for judgement calls.",
        ],
      },
      {
        heading: "A pre-launch checklist",
        subheading: "Twelve things to verify",
        body: [
          "All links and forms work. Images display correctly. Navigation behaves on every device. Pages load quickly. The site is responsive. Browsers are covered. SSL is active. Error messages are friendly. There are no broken pages. Payments complete. Search returns accurate results. Analytics and tracking fire correctly.",
          "Re-run the core checks after every major update, since new features are the most common source of new bugs.",
        ],
        links: [
          { label: "Design & Experience", href: "/services/experience/design-experience" },
          {
            label: "What makes a website successful?",
            href: "/blog/what-makes-a-website-successful",
          },
        ],
      },
    ],
    faq: [
      {
        q: "How often should a website be tested?",
        a: "Before launch, after every major update, when adding new features, and periodically afterwards to catch performance, security and compatibility drift.",
      },
      {
        q: "Can website testing improve SEO?",
        a: "Yes. A well-tested site loads faster, works better on mobile and has fewer errors, all of which support search performance.",
      },
      {
        q: "What is the difference between functional and usability testing?",
        a: "Functional testing checks that features work as specified. Usability testing checks whether real people can use them easily to reach their goal.",
      },
    ],
  }),

  buildPost({
    slug: "how-to-outsource-web-development",
    cluster: "web",
    title: "How to Outsource Web Development Without Losing Control",
    category: "Web Development",
    excerpt:
      "Outsourcing fails because of weak process, not geography. Six practices that keep an offshore web project visible, accountable and on schedule.",
    description:
      "How to outsource web development without losing control: structured communication, sprints, shared tooling, time-zone overlap, dedicated teams and built-in QA.",
    authorRole: "Delivery Desk",
    accentColor: "#dc3545",
    heroImage: "/blog/how-to-outsource-web-development.webp",
    tagline:
      "Good outsourcing is less about where the team sits and more about how the work is run.",
    content: [
      {
        heading: "Why companies outsource",
        subheading: "Speed and access, not just cost",
        body: [
          "Demand for platforms, portals, ecommerce sites and web apps is growing faster than most in-house teams can staff. Hiring experienced engineers can take months, so many businesses partner with offshore teams to move faster and scale flexibly.",
          "Done well, outsourcing also gives access to specialist skills, faster onboarding and lower operating cost than an equivalent in-house team.",
        ],
      },
      {
        heading: "Where control is usually lost",
        subheading: "It is almost never the developers",
        body: [
          "Most failures trace back to weak process: unclear deliverables, poor communication structures, delayed feedback, no visibility into progress and no clear ownership.",
          "When you cannot see how work is progressing, trust erodes quickly, and the project starts to feel like a black box.",
        ],
      },
      {
        heading: "Six practices that keep you in control",
        subheading: "What to insist on from any partner",
        body: [
          "Structured communication: regular stand-ups or weekly reviews, a dedicated channel and a clear escalation path, so you are never waiting for updates.",
          "Sprint-based delivery: short cycles with defined deliverables, review checkpoints and measurable outcomes keep scope visible and changes manageable.",
          "Shared tooling: use a project board and a code repository you can access, so task status, blockers and deployments are never hidden.",
          "Time-zone overlap: even three to five shared hours a day speeds up approvals, reviews and decisions.",
          "A dedicated team: consistent developers build product understanding and accountability, and start to behave like an extension of your own department.",
          "QA built in: continuous testing, peer code reviews and clear ownership, not a single check at the end.",
        ],
        pullQuote: "You should never feel like you are waiting for an update.",
        links: [
          {
            label: "Custom Application Development",
            href: "/services/build/custom-application-development",
          },
          { label: "Talk to us", href: "/contact#contact-form" },
        ],
      },
      {
        heading: "Offshore team, in-house team or freelancers?",
        subheading: "Match the model to the project",
        body: [
          "Freelancers suit small, well-defined tasks. In-house teams give maximum control but are slow and costly to build. A dedicated offshore team sits between them: stable and accountable, with the flexibility to scale up or down as the roadmap changes.",
        ],
      },
    ],
    faq: [
      {
        q: "Is outsourcing web development to India reliable?",
        a: "Yes. Reliability depends less on geography and more on choosing a team with structured communication, clear ownership and mature delivery practices.",
      },
      {
        q: "What is the biggest risk in outsourcing?",
        a: "Poor process management: weak communication, unclear deliverables and little visibility into progress are the main reasons projects fail.",
      },
      {
        q: "How much can offshore development save?",
        a: "Depending on scope and engagement model, offshore development can cost noticeably less than equivalent in-house hiring in the US or UK, while keeping delivery quality high.",
      },
    ],
  }),

  // ───────────────────────── Cluster: AI & product ─────────────────────────
  buildPost({
    slug: "ai-prototype-to-production-ready-mvp",
    cluster: "ai-product",
    pillar: true,
    title: "How to Turn Your AI Prototype Into a Production-Ready MVP",
    category: "AI & Product",
    excerpt:
      "Your AI-built prototype works. Now it needs an audit, real security, a path to scale, user validation and a launch plan. A five-step roadmap.",
    description:
      "A five-step roadmap from AI-generated prototype to production-ready MVP: code audit, security and stability, scalability, user validation and go-to-market.",
    authorRole: "Product Engineering",
    accentColor: "#111111",
    heroImage: "/blog/ai-prototype-to-production-ready-mvp.webp",
    tagline:
      "A prototype proves the idea. An MVP has to survive real users, real data and real scrutiny.",
    content: [
      {
        heading: "Step 1: Get a professional code audit",
        subheading: "Know exactly what you are working with",
        body: [
          "An audit examines security vulnerabilities, technical debt, architectural limits and missing edge cases. It answers questions such as what breaks at 100, 1,000 or 10,000 users, and where the AI took shortcuts.",
          "Turn the findings into a prioritised list: critical security issues first, then scalability blockers, major user-experience gaps and finally the debt you can pay down iteratively.",
        ],
      },
      {
        heading: "Step 2: Prioritise security and stability",
        subheading: "You cannot launch without this",
        body: [
          "Production needs proper password hashing, secure sessions, role-based access, encryption at rest and in transit, API rate limiting, input validation and secrets kept out of code.",
          "It also needs graceful failure: error handling that does not leak details, monitoring and alerts so you know before users complain, and fallbacks when third-party services go down.",
        ],
      },
      {
        heading: "Step 3: Make it actually scalable",
        subheading: "Five test users is not a load test",
        body: [
          "Add database indexes and caching, move long-running work to background jobs, optimise front-end assets and understand how your cloud costs behave as usage grows.",
          "Then test under load: simulate realistic traffic, find the breaking points and see what happens when a database is slow or an API is down.",
        ],
        pullQuote:
          "A serverless function that costs pennies today can cost thousands at scale.",
      },
      {
        heading: "Step 4: Validate with real users",
        subheading: "Build the right thing before building more",
        body: [
          "Talk to twenty to thirty people in your target market and watch them use the product. Find where they get stuck, what they expect that is missing and whether the problem is painful enough to pay for.",
          "Use what you learn to sort features into must-haves for launch, should-haves for the next release and nice-to-haves that can wait, instead of building from a wishlist.",
        ],
      },
      {
        heading: "Step 5: Build a go-to-market plan",
        subheading: "A great product nobody knows about stays a hobby",
        body: [
          "Define a specific ideal customer, size the market you can realistically reach and map the competition. Write a one-sentence value proposition and test the messaging with real users.",
          "Plan a beta with your first fifty users, how you will acquire them and how you will collect feedback.",
        ],
        links: [
          {
            label: "Custom Application Development",
            href: "/services/build/custom-application-development",
          },
          { label: "SaaS Solutions", href: "/services/scale/saas-solutions" },
          {
            label: "Is your AI-generated app production-ready?",
            href: "/blog/is-your-ai-generated-app-production-ready",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Can an AI-generated prototype become a production app?",
        a: "Often, yes, but it usually needs an audit, security hardening, scalability work and testing first. Sometimes parts need to be rebuilt rather than patched.",
      },
      {
        q: "What should I fix first?",
        a: "Critical security issues, then anything that will break under real load, then major usability gaps. Technical debt can be handled iteratively.",
      },
      {
        q: "How do I know what features to build for launch?",
        a: "Validate with real users. Include only what the core value proposition needs, and defer everything else to later releases.",
      },
    ],
  }),

  buildPost({
    slug: "is-your-ai-generated-app-production-ready",
    cluster: "ai-product",
    title: "Is Your AI-Generated App Actually Production-Ready?",
    category: "AI & Product",
    excerpt:
      "AI tools can get a working app on screen in a weekend. The gap between that and a product you can put in front of customers or investors is wider than it looks.",
    description:
      "What AI coding tools give you and what they do not: edge cases, scalability, security and the questions investors ask about AI-generated apps.",
    authorRole: "Product Engineering",
    accentColor: "#dc3545",
    heroImage: "/blog/is-your-ai-generated-app-production-ready.webp",
    tagline:
      "You built something real in days. Before you launch or pitch, here is what it does not yet have.",
    content: [
      {
        heading: "What AI coding tools really give you",
        subheading: "A proof of concept, and that is valuable",
        body: [
          "Building a working app with an AI assistant proves your idea can exist as software and gives you something to test. That is a real achievement.",
          "What you have is a prototype that works in controlled conditions. A product has to handle real users, real data and real business rules.",
        ],
      },
      {
        heading: "The technical debt you cannot see yet",
        subheading: "AI optimises for the request in front of it",
        body: [
          "An assistant writes code to make your immediate request work. It does not plan for what happens when things go wrong, usage grows or unusual cases appear.",
          "The gaps show up in daily use: a process paused halfway and resumed the next day, two people editing the same record, a month-end import of ten thousand rows, a connection that drops mid-transaction.",
        ],
      },
      {
        heading: "Scalability and security",
        subheading: "Two things that fail quietly",
        body: [
          "Queries that feel instant with a hundred records can crawl with a hundred thousand. Costs that are trivial in testing can balloon with real traffic.",
          "Authentication that merely works is not the same as authentication that resists attacks: password resets, access to other users' data, injection and cross-site scripting all need explicit attention.",
        ],
        pullQuote:
          "The AI gave you working code. It did not give you production-ready code.",
      },
      {
        heading: "What investors and customers actually look for",
        subheading: "They are buying the foundation, not the demo",
        body: [
          "Expect questions about who is on the technical team, how the architecture fits together, how it scales, what the security model is and what the roadmap is based on.",
          "They want a viable product with a path to scale, a team that understands what it built, evidence that users want it and an architecture that will not need a full rebuild in six months.",
        ],
        links: [
          {
            label: "How to turn your AI prototype into a production-ready MVP",
            href: "/blog/ai-prototype-to-production-ready-mvp",
          },
          {
            label: "Advanced Technology Solutions",
            href: "/services/scale/advanced-technology-solutions",
          },
          {
            label: "Cybersecurity Solutions",
            href: "/services/scale/cybersecurity-solutions",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Is AI-generated code safe to put in front of customers?",
        a: "Not without review. It needs a security audit, input validation, proper authentication and error handling before it handles real customer data.",
      },
      {
        q: "Will investors accept an app built with AI tools?",
        a: "Many will, but they will ask how it scales, how it is secured and who maintains it. Be ready to show a credible technical foundation and roadmap.",
      },
      {
        q: "Do I need to rebuild the app from scratch?",
        a: "Not always. An audit tells you which parts are sound, which need hardening and which should be replaced.",
      },
    ],
  }),

  // ───────────────────────── Cluster: Growth marketing ─────────────────────────
  buildPost({
    slug: "how-ppc-helps-new-businesses-grow-faster",
    cluster: "growth-marketing",
    pillar: true,
    title: "How PPC Helps New Businesses Grow Faster",
    category: "Growth Marketing",
    excerpt:
      "SEO takes months. PPC can put a new business in front of buyers within days. Here is how it works, what it costs to get right and how to pair it with SEO.",
    description:
      "How pay-per-click advertising helps new businesses: instant visibility, precise targeting, measurable results, PPC versus SEO and the strategies that work.",
    authorRole: "Performance Marketing",
    accentColor: "#111111",
    heroImage: "/blog/how-ppc-helps-new-businesses-grow-faster.webp",
    tagline:
      "When nobody knows your brand yet, paid search is the fastest route to people already looking for what you sell.",
    content: [
      {
        heading: "What PPC is",
        subheading: "You pay when someone clicks",
        body: [
          "Pay-per-click advertising shows your ads on search engines, social platforms, video and partner sites, and you pay only when a user clicks. The main platforms are Google Ads, Microsoft Advertising, Meta, LinkedIn and YouTube.",
          "Because search ads target people who are actively looking, intent is far higher than with broad awareness advertising.",
        ],
      },
      {
        heading: "Why it suits new businesses",
        subheading: "Visibility before authority",
        body: [
          "A new business has little brand awareness and almost no organic visibility. PPC places you in front of potential customers within days, alongside established competitors.",
          "It also scales with your budget. You set daily limits, pause anything that is not working and put more money behind what is.",
        ],
      },
      {
        heading: "What you can measure",
        subheading: "Every rupee has a number attached",
        body: [
          "PPC reports clicks, impressions, cost per click, conversion rate, cost per lead and return on ad spend. That makes it possible to learn quickly which keywords, ads and pages produce customers.",
        ],
      },
      {
        heading: "PPC and SEO work best together",
        subheading: "Fast now, durable later",
        body: [
          "PPC delivers immediate leads and fast testing, while SEO builds authority and lowers acquisition cost over time. Use paid search to learn which keywords convert, then invest in organic content around them.",
        ],
        links: [
          {
            label: "Performance Marketing",
            href: "/qa/services/digital-marketing/performance-marketing",
          },
          { label: "SEO", href: "/qa/services/digital-marketing/seo" },
        ],
      },
      {
        heading: "Strategies that work for new campaigns",
        subheading: "Where early budget is won or wasted",
        body: [
          "Start with tight keyword research: commercial-intent, long-tail and local terms. Send traffic to a dedicated landing page with a clear headline, proof and a simple form instead of the homepage.",
          "Use negative keywords to cut irrelevant clicks, track form submissions and calls as conversions, and review search terms weekly so the budget keeps moving toward what converts.",
        ],
      },
    ],
    faq: [
      {
        q: "How quickly can PPC bring leads?",
        a: "Campaigns can start sending traffic within hours of approval. Lead quality improves over the first weeks as targeting and ads are refined.",
      },
      {
        q: "How much should a new business spend on PPC?",
        a: "Enough to gather meaningful data. You can start small and scale spend as you identify keywords and pages that convert.",
      },
      {
        q: "Should I choose PPC or SEO?",
        a: "Most businesses benefit from both: PPC for immediate leads and learning, SEO for durable organic visibility.",
      },
    ],
  }),

  buildPost({
    slug: "how-influencer-marketing-builds-brand-trust",
    cluster: "growth-marketing",
    title: "How Influencer Marketing Builds Brand Trust",
    category: "Growth Marketing",
    excerpt:
      "People trust people more than ads. How creator partnerships build credibility, what to look for in a partner and how to measure whether it worked.",
    description:
      "How influencer marketing builds brand trust: why creators outperform ads for credibility, what a good influencer partner provides and how to measure ROI.",
    authorRole: "Brand & Social",
    accentColor: "#dc3545",
    heroImage: "/blog/how-influencer-marketing-builds-brand-trust.webp",
    tagline:
      "Audiences believe recommendations from people they follow far more readily than they believe brand messaging.",
    content: [
      {
        heading: "Why creators carry more weight than ads",
        subheading: "Trust is borrowed from relationships",
        body: [
          "Before buying, people increasingly look for recommendations from creators, experts and communities they already follow. Influencers are seen as relatable, and their endorsements carry credibility that direct advertising cannot match.",
          "A well-run campaign builds awareness, credibility, traffic, engagement, leads and sales while strengthening customer relationships.",
        ],
      },
      {
        heading: "What drives results",
        subheading: "Fit beats follower count",
        body: [
          "Match creators to your audience and category, not simply to the largest following. Nano and micro influencers often deliver higher engagement and better conversion for focused brands.",
          "Give creators room to tell the story in their own voice. Authenticity is the entire reason the format works.",
        ],
      },
      {
        heading: "What a good partner provides",
        subheading: "Beyond a contact list",
        body: [
          "Look for access to creators across sizes and niches, data-led campaign planning, end-to-end management from discovery to reporting, strong creative direction and transparent reporting.",
          "Reports should cover reach, impressions, engagement, click-through, conversions and return on investment, not only vanity numbers.",
        ],
        links: [
          {
            label: "Influencer Marketing",
            href: "/qa/services/digital-marketing/influencer-marketing",
          },
          {
            label: "360° marketing for India",
            href: "/in/services/scale/digital-marketing",
          },
        ],
      },
      {
        heading: "Measuring the impact",
        subheading: "Tie creator activity to business outcomes",
        body: [
          "Use unique links and codes, track assisted conversions, and compare cost per acquisition with your other channels. Brand-lift signals such as branded search and direct traffic help show trust building over time.",
        ],
      },
    ],
    faq: [
      {
        q: "Is influencer marketing only for large brands?",
        a: "No. Startups and small businesses often do well with micro and nano creators who have focused, engaged audiences.",
      },
      {
        q: "How do I choose the right influencers?",
        a: "Look at audience fit, engagement quality and content style first. Follower count alone is a poor predictor of results.",
      },
      {
        q: "How do I measure influencer ROI?",
        a: "Track reach, engagement, clicks, conversions and cost per acquisition using unique links or codes, and compare them with other channels.",
      },
    ],
  }),

  buildPost({
    slug: "being-found-seo-aeo-and-visibility",
    cluster: "growth-marketing",
    title: "If You Cannot Be Found, You Do Not Exist: SEO, AI Search and Visibility",
    category: "Growth Marketing",
    excerpt:
      "Customers now discover brands in AI answers, social feeds, voice assistants and marketplaces as well as Google. How to stay visible across all of them.",
    description:
      "How to stay discoverable beyond Google: answer engine optimisation, social search, voice search and marketplaces, with practical steps to improve visibility.",
    authorRole: "Search & Content",
    accentColor: "#111111",
    heroImage: "/blog/being-found-seo-aeo-and-visibility.webp",
    tagline:
      "Ranking on Google is one part of discoverability. Your customers are looking in more places than that.",
    content: [
      {
        heading: "Visibility is no longer one channel",
        subheading: "People ask, scroll and search everywhere",
        body: [
          "Customers find brands through AI assistants, short-video platforms, voice assistants and marketplaces as well as search engines. A well-designed site and good content still fail if the brand is invisible in the places people actually look.",
        ],
      },
      {
        heading: "How AI search changes the rules",
        subheading: "From links to answers",
        body: [
          "AI tools answer questions directly rather than listing links, which has given rise to answer engine optimisation. It rewards content that is clear, structured and trustworthy.",
          "Anticipate real questions with FAQ-style content, add structured data so machines understand context, and support claims with credible sources.",
        ],
      },
      {
        heading: "Where your brand needs to appear",
        subheading: "Go where the question is asked",
        body: [
          "Social platforms act as search engines for products and ideas. Voice queries are conversational and local. Marketplaces and review sites drive many B2C and B2B purchase decisions.",
          "Audit where your audience searches, engages and decides, then make sure you are present and consistent in each.",
        ],
        links: [
          { label: "SEO services", href: "/qa/services/digital-marketing/seo" },
          {
            label: "How PPC helps new businesses grow",
            href: "/blog/how-ppc-helps-new-businesses-grow-faster",
          },
        ],
      },
      {
        heading: "Steps to improve visibility now",
        subheading: "A short action list",
        body: [
          "Audit your current presence. Diversify content formats across long-form articles, short video and FAQ pages. Write for humans first and structure for machines. Measure share of search, mentions in AI answers, engagement and review volume, not just rankings.",
        ],
      },
    ],
    faq: [
      {
        q: "What is answer engine optimisation?",
        a: "It is the practice of structuring content so AI tools and answer engines can understand, trust and cite it when responding to user questions.",
      },
      {
        q: "Does AEO replace SEO?",
        a: "No. It builds on SEO. Clear structure, authoritative content and technical health help both search rankings and AI answers.",
      },
      {
        q: "How do I measure visibility beyond rankings?",
        a: "Track share of search, branded queries, mentions in AI answers, social reach and engagement, and reviews or citations on key platforms.",
      },
    ],
  }),

  buildPost({
    slug: "choosing-conversion-rate-optimisation-services",
    cluster: "growth-marketing",
    title: "Choosing the Right Conversion Rate Optimisation Services",
    category: "Growth Marketing",
    excerpt:
      "More traffic is expensive. Turning more of your existing visitors into customers is usually cheaper. What CRO is and how to pick a partner who does it properly.",
    description:
      "What conversion rate optimisation is, why it beats chasing traffic, and the four pillars of a good CRO engagement: goals, data, UX and continuous testing.",
    authorRole: "Performance Marketing",
    accentColor: "#dc3545",
    heroImage: "/blog/choosing-conversion-rate-optimisation-services.webp",
    tagline:
      "Traffic only pays when visitors take action. CRO is the discipline of making that more likely.",
    content: [
      {
        heading: "What CRO means",
        subheading: "A higher share of visitors who act",
        body: [
          "Conversion rate optimisation increases the percentage of visitors who complete a desired action such as enquiring, buying or signing up. It is a data-backed method, not guesswork.",
          "Typical improvements include clearer visual hierarchy, sharper copy, faster pages and calls to action that guide the next step.",
        ],
      },
      {
        heading: "Why a strategic approach matters",
        subheading: "Vanity metrics do not pay the bills",
        body: [
          "Many brands chase page views through ads, SEO and social, yet a site without a clear path to conversion wastes that traffic. A structured programme improves lead quality, lowers bounce rates and stretches the marketing budget further.",
        ],
      },
      {
        heading: "Four pillars of a good CRO engagement",
        subheading: "What to look for in a partner",
        body: [
          "Alignment with business goals: lead volume, ecommerce sales and account sign-ups need different strategies, so insist on defining success first.",
          "Data-driven decisions: analytics, session recordings and heatmaps show exactly where users drop off.",
          "User experience: clean navigation, fast loading and a frictionless journey are the foundation for conversion.",
          "Continuous testing: regular A/B tests of layouts, headlines and CTA placement compound into significant gains over time.",
        ],
        links: [
          {
            label: "Performance Marketing",
            href: "/qa/services/digital-marketing/performance-marketing",
          },
          {
            label: "Website & CMS Solutions",
            href: "/services/build/website-cms-solutions",
          },
          {
            label: "What makes a website successful?",
            href: "/blog/what-makes-a-website-successful",
          },
        ],
      },
    ],
    faq: [
      {
        q: "How long does CRO take to show results?",
        a: "Early wins on obvious friction can appear within weeks. Meaningful testing programmes usually need a few months of traffic to be conclusive.",
      },
      {
        q: "Do I need a lot of traffic for CRO?",
        a: "More traffic makes testing faster, but low-traffic sites still benefit from UX, speed and messaging fixes guided by qualitative research.",
      },
      {
        q: "Is CRO a one-time project?",
        a: "No. It is an ongoing cycle of research, testing and iteration as your audience and offers change.",
      },
    ],
  }),
];
