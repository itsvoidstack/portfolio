import { siteConfig } from "@/config/site";
import { featuredProjects, repositoryProjects } from "@/data/projects";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.author.name,
    alternateName: siteConfig.author.handle,
    url: siteConfig.url,
    image: `${siteConfig.url}/portrait.png`,
    email: `mailto:${siteConfig.author.email}`,
    jobTitle: "Software Developer & Student",
    description: siteConfig.description,
    sameAs: [siteConfig.author.github, siteConfig.author.linkedin],
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Web Development",
      "Artificial Intelligence",
      "TypeScript",
      "Next.js",
      "React",
      "Python",
      "FastAPI",
      "Supabase",
      "Gemini AI",
      "Tailwind CSS",
      "UI/UX Design",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#person`,
    },
    inLanguage: "en-US",
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#profilepage`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    mainEntity: {
      "@id": `${siteConfig.url}/#person`,
    },
  };

  const allProjects = [...featuredProjects, ...repositoryProjects];

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: allProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareSourceCode",
        name: project.title,
        description: project.description,
        programmingLanguage: project.stack,
        codeRepository: project.githubUrl,
        url: project.demoUrl || project.githubUrl,
        author: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
    </>
  );
}
