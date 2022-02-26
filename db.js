const Pool = require("pg").Pool;

const pool = new Pool({
    // user: "postgres",
    // password: "kimeron123",
    // host: "localhost",
    // port: 5432,
    // database: "courses"

    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
});

module.exports = pool;