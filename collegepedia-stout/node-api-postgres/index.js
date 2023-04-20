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
  app.get('/getComments', db.getComments)
  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })