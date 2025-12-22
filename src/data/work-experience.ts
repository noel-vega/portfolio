
type WorkExperience = {
  company: {
    name: string;
    industry: string;
    link: string;
  };
  techStack: string[];
  role: string;
  descriptions: string[]
  dateRange: { from: Date; to: Date | "Present" };
}


export const workExperience: WorkExperience[] = [
  {
    company: {
      name: "Revia.ai",
      industry: "Legal Tech",
      link: "https://www.revia.ai"
    },
    techStack: ["Azure", "C#", "ASP.NET", "Typescript", "React", "Tanstack Router", "Docker", "Terraform", "SQL Server"],
    role: "Software Engineer",
    dateRange: { from: new Date(2024, 6), to: "Present" },
    descriptions: [
      "Part of founding engineering team which lead the migration of an asp.net razor page application to an asp.net minimal api and react frontend.",
      "Migrating our on prem application to a cloud SAAS offering hosted in Azure.",
      "Use terraform to automate the creation of azure resources to allow clients to self host our application within there azure environment as a self hosting solution.",
      "Create staging and production CI/CD pipelines.",
      "Created private nuget and npm github repositories for hosting packages we can share across applications",
      "Built fullstack product called 'Transfer' which consited of building frontend react components/pages and crafting asp.net endpoints which interact with 3rd party legal tech DMS platforms to move documents between local file systems and 3rd party DMS platforms.",
    ],
  },
  {
    company: {
      name: "Invonto",
      industry: "MVP Consulting/Contractor",
      link: "https://www.invonto.com",
    },
    role: "Software Engineer",
    dateRange: { from: new Date(2024, 1), to: new Date(2024, 6) },
    descriptions: [
      "Worked with ML, computer vision engineers, and mobile app team to build an api for processing hand images for measuring finger nail sizes taken from a mobile application.",
      "Created admin dashboard with Angular to display metrics/statistics of finger nail measurements processed by ML and Computer vision team.",
      "Managed the deployment of both the Nail api and frontend hosted on AWS EC2 instances for both staging and production environemnts using nginx as a reverse proxy.",
    ],
    techStack: [
      "AWS",
      "Angular",
      "Typescript",
      "Python",
      "Flask",
      "Docker",
      "Nginx",
    ],
  },
  {
    company: {
      name: "Relativity",
      industry: "Legal Tech",
      link: "https://www.relativity.com",
    },
    role: "Service Delivery",
    dateRange: { from: new Date(2021, 0), to: new Date(2023, 1) },
    descriptions: [
      "Led large multi year data migration projects spanning many petabytes of data.",
      "Created an automation layer on top of our internal tooling using powershell to increase data migration throughput by 1000%, utilizing queues, retry logic and rate limiters. My breakthrough resulted in 2 outstanding quartley employee awards.",
      "Created automation using powershell to configure numerous servers and sql databases within a client environment to speed up time to migration speed.",
      "Developed data migration reports via sql and power bi and presented to clients for data migration updates",
      "Built an api using python flask which would call our cli data migration tool to run a specific configuration, this included a minimal dashboard for viewing migration progress and jobs.",
      "The go to guy for handling the most challenging migrations and was often called in to resolve accounts that may have gone south. This included giving clients detailed breakdowns of my plan of attack to hit initial deadlines and automated reporting, This often lead to clients regaining trust in us.",
    ],
    techStack: [
      "Powershell",
      "React",
      "Typescript",
      "Python",
      "Flask",
      "SQL Server",
      "Power BI",
    ],
  },
]

export const skills = ["Typescript", "React", "C#", "Docker", "Azure"]
