
type WorkExperience = {
  company: {
    name: string;
    industry: string;
  };
  techStack: string[];
  role: string;
  descriptions: string[]
}


export const workExperience: WorkExperience[] = [
  {
    company: {
      name: "Revia.ai",
      industry: "Legal Tech"
    },
    techStack: ["Azure", "C#", "ASP.NET", "Typescript", "React", "Tanstack Router", "Docker", "Terraform", "SQL Server"],
    role: "Software Engineer",
    descriptions: [
      "Part of founding engineering team which lead the migration of an asp.net razor page application to an asp.net minimal api and react frontend.",
      "Migrating our on prem application to a cloud SAAS offering hosted in Azure.",
      "Use terraform to automate the creation of azure resources to allow clients to self host our application within there azure environment as a self hosting solution.",
      "Create staging and production CI/CD pipelines.",
      "Created private nuget and npm github repositories for hosting packages we can share across applications",
      "Built fullstack product called 'Transfer' which consited of building frontend react components/pages and crafting asp.net endpoints which interact with 3rd party legal tech DMS platforms to move documents between local file systems and 3rd party DMS platforms.",
    ],
  }]
