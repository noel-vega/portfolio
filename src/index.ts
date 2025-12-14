import express from 'express'
const app = express()
const port = 4000
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'



app.set("view engine", "ejs")
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
app.set("views", join(__dirname, 'views'))


app.use(express.static(join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.render('index', {
    title: 'Noel Vega',
    workExperience: [
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
      },
    ]
  })
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

