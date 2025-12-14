import express from 'express'
const app = express()
const port = 4000
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { workExperience } from './data/work-experience.js'



app.set("view engine", "ejs")
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
app.set("views", join(__dirname, 'views'))


app.use(express.static(join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.render('index', {
    title: 'Noel Vega',
    workExperience
  })
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

