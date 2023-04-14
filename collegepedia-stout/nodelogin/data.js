const userTable = [];
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

  const createUser = (request, response) => {
    const { id, username, email, password } = request.body
  
    pool.query('INSERT INTO storedUsers (id, username, email, password) VALUES ($1, $2, $3, $4)', [id, username, email, password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.insertId}`)
    })
  }

  module.exports = {
    getUsers,
    createUser,
    userTable
  };