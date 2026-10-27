import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers | Join the Palqar Team",
  description:
    "Explore open roles at Palqar. Join a team of designers, developers, and strategists building the future of digital experiences.",
  path: "/career",
});

export default function CareerLayout({ children }) {
  return children;
}
