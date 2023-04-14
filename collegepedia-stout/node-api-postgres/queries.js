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

  module.exports = {
    getUsers,
    getSchools,
    getMajors,
    getProfessors
  }