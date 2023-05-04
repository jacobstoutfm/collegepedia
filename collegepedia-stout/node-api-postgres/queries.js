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

function addProfessors(request, response) {
  const q = `INSERT INTO professor ("id", "first_name", "last_name") VALUES (DEFAULT, '${request.body.first_name}', '${request.body.last_name}')`;
    
  pool.query(q, (err,data)=>{
    if(err) return response.json(err)
    return response.json("Successfully added professor.")
  })
}

function addSchool(request, response) {
  const q = `INSERT INTO university ("id", "name", "address") VALUES (DEFAULT, '${request.body.name}', '${request.body.address}')`;
    
  pool.query(q, (err,data)=>{
    if(err) return response.json(err)
    return response.json("Successfully added school.")
  })
}

function addMajors(request, response) {
  const q = `INSERT INTO major ("id", "name", "department_id") VALUES (DEFAULT, '${request.body.name}', '${request.body.department_id}')`;
    
  pool.query(q, (err,data)=>{
    if(err) return response.json(err)
    return response.json("Successfully added major.")
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
    getProfRatings,
    addProfessors,
    addSchool,
    addMajors
  }