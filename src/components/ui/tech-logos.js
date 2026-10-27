import { cloneElement } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiZoho,
  SiAngular,
  SiJavascript,
  SiRedux,
  SiGoogleads,
  SiMeta,
  SiWhatsapp,
  SiInstagram,
  SiTiktok,
  SiShopify,
  SiWordpress,
  SiGoogleanalytics,
  SiMailchimp,
  SiSlack,
  SiNotion,
  SiAirtable,
  SiHubspot,
  SiFigma,
  SiWebflow,
} from "react-icons/si";
import { FaYoutube, FaLinkedin } from "react-icons/fa";

function LogoItem({ icon, label }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}>
      {cloneElement(icon, { role: "presentation", "aria-hidden": true, focusable: false })}
      <span style={{ fontSize: "12px", fontFamily: "DM Sans, sans-serif", letterSpacing: "0.03em" }}>
        {label}
      </span>
    </span>
  );
}

export default function TechLogos() {
  return [
    // Dev stack
    { node: <LogoItem icon={<SiReact />} label="React" />, title: "React" },
    { node: <LogoItem icon={<SiNextdotjs />} label="Next.js" />, title: "Next.js" },
    { node: <LogoItem icon={<SiTypescript />} label="TypeScript" />, title: "TypeScript" },
    { node: <LogoItem icon={<SiJavascript />} label="JavaScript" />, title: "JavaScript" },
    { node: <LogoItem icon={<SiTailwindcss />} label="Tailwind CSS" />, title: "Tailwind CSS" },
    { node: <LogoItem icon={<SiFlutter />} label="Flutter" />, title: "Flutter" },
    { node: <LogoItem icon={<SiRedux />} label="Redux" />, title: "Redux" },
    { node: <LogoItem icon={<SiWordpress />} label="WordPress" />, title: "WordPress" },
    { node: <LogoItem icon={<SiFigma />} label="Figma" />, title: "Figma" },
    // Marketing & Ads
    { node: <LogoItem icon={<SiGoogleads />} label="Google Ads" />, title: "Google Ads" },
    { node: <LogoItem icon={<SiMeta />} label="Meta Ads" />, title: "Meta Ads" },
    { node: <LogoItem icon={<SiGoogleanalytics />} label="Google Analytics" />, title: "Google Analytics" },
    { node: <LogoItem icon={<FaYoutube />} label="YouTube" />, title: "YouTube" },
    { node: <LogoItem icon={<SiInstagram />} label="Instagram" />, title: "Instagram" },
    { node: <LogoItem icon={<FaLinkedin />} label="LinkedIn" />, title: "LinkedIn" },
    { node: <LogoItem icon={<SiWhatsapp />} label="WhatsApp" />, title: "WhatsApp" },
    // CRM & Ops
    { node: <LogoItem icon={<SiZoho />} label="Zoho" />, title: "Zoho" },
    // { node: <LogoItem icon={<SiMailchimp />} label="Mailchimp" />, title: "Mailchimp" },
    // { node: <LogoItem icon={<SiAirtable />} label="Airtable" />, title: "Airtable" },
    // { node: <LogoItem icon={<SiNotion />} label="Notion" />, title: "Notion" },
    // { node: <LogoItem icon={<SiSlack />} label="Slack" />, title: "Slack" },
  ];
}
