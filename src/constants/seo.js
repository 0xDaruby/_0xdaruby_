import { projects } from "../data/data.js";

export const SITE_URL = "https://oxdaruby.tech/";
export const PERSON_ID = `${SITE_URL}#person`;

const description =
  "0xdaruby is the personal brand of David Iquaibom, a developer and AI builder exploring AI tools, building software, and sharing practical projects and learnings.";
const profileUrls = [
  "https://github.com/0xdaruby",
  "https://twitter.com/0xdaruby",
  "https://www.instagram.com/0xdaruby",
];
const projectTypes = {
  "Portfolio Website series": "CreativeWork",
};

export const createStructuredData = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "David Iquaibom",
      alternateName: "0xdaruby",
      url: SITE_URL,
      image: new URL("images/hero.jpeg", SITE_URL).href,
      jobTitle: "Developer and AI builder",
      description,
      sameAs: profileUrls,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "0xdaruby",
      alternateName: "David Iquaibom",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}#profile`,
      url: SITE_URL,
      name: "0xdaruby | David Iquaibom",
      description,
      isPartOf: { "@id": `${SITE_URL}#website` },
      mainEntity: { "@id": PERSON_ID },
    },
    ...projects.map((project, index) => ({
      "@type": projectTypes[project.name] ?? "SoftwareApplication",
      "@id": `${SITE_URL}#project-${index + 1}`,
      name: project.name,
      description: project.desc.trim(),
      url: project.link,
      keywords: project.lang.trim(),
      creator: { "@id": PERSON_ID },
      isPartOf: { "@id": `${SITE_URL}#website` },
    })),
  ],
});

export const SEOdata = {
  homePage: {
    author: "David Iquaibom",
    image: new URL("images/hero.jpeg", SITE_URL).href,
    creator: "@0xdaruby",
    url: SITE_URL,
    title: "0xdaruby (David Iquaibom) | Developer and AI Builder",
    description,
  },
};
