const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 5000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

  app.get('/test', (request, response) => {
    response.json({info: 'Node.js, Express, and Postgres API'})
  })
  
  app.get('/students', db.getUsers)
  app.get('/schools', db.getSchools)
  app.get('/majors', db.getMajors)
  app.get('/professors', db.getProfessors)
  app.get('/studentsLogged', db.getStudents)
  app.get('/universityRating', db.getUniRatings)
  app.post('/universityRating', db.addUniRating)
  app.get('/majorRating', db.getMajorRatings)
  app.post('/majorRating', db.addMajorRatings)
  app.get('/profRating', db.getProfRatings)
  app.post('/profRating', db.addProfRatings)
  app.post('/professorsNew', db.addProfessors)
  app.post('/schoolNew', db.addSchool)
  app.post('/majorsNew', db.addMajors)
  
  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })