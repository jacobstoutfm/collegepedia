const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'seniorproject',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getStudents = (request, response) => {
    pool.query('SELECT * FROM "storedUsers"', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getSchools = (request, response) => {
    pool.query('SELECT * FROM university', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
  })
}

const getMajors = (request, response) => {
  pool.query('SELECT * FROM major', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
})
}

const getProfessors = (request, response) => {
  pool.query('SELECT * FROM professor', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
})
}


const getUniRatings = (request, response) => {
  pool.query('SELECT * FROM university_rating', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

function addUniRating(request, response) {
  const q = `INSERT INTO university_rating ("university_id","rating","comments") VALUES (${request.body.university_id}, ${request.body.rating}, '${request.body.comments}')`
    
    pool.query(q, (err,data)=>{
      if(err) return response.json(err)
      return response.json("Successfully added rating.")
    })
}

function addMajorRatings(request, response) {
  const q = `INSERT INTO major_rating ("major_id","rating","comments") VALUES (${request.body.major_id}, ${request.body.rating}, '${request.body.comments}')`
    
    pool.query(q, (err,data)=>{
      if(err) return response.json(err)
      return response.json("Successfully added rating.")
    })
}

const getMajorRatings = (request, response) => {
  pool.query('SELECT * FROM major_rating', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

function addProfRatings(request, response) {
  const q = `INSERT INTO professor_rating ("professor_id","rating","comments") VALUES (${request.body.professor_id}, ${request.body.rating}, '${request.body.comments}')`
    
    pool.query(q, (err,data)=>{
      if(err) return response.json(err)
      return response.json("Successfully added rating.")
    })
}

const getProfRatings = (request, response) => {
  pool.query('SELECT * FROM professor_rating', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

  module.exports = {
    getUsers,
    getMajors,
    getSchools,
    getProfessors,
    getStudents,
    getUniRatings,
    addUniRating,
    getMajorRatings,
    addMajorRatings,
    addProfRatings,
    getProfRatings
  }