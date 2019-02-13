var path = require('path')
module.exports = {
  local: {
    client: 'pg',
    connection: 'postgres://postgres@localhost/sitrep_test',
    debug: process.env.KNEX_DEBUG || false,
    migrations: {
      directory: path.join(__dirname, 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'seeds')
    }
  },
  remote: {
    client: 'pg',
    debug: process.env.KNEX_DEBUG || false,
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'seeds')
    }
  },
  circle: {
    client: 'pg',
    connection: 'postgres://postgres@localhost/circle_test',
    migrations: {
      directory: path.join(__dirname, 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'seeds')
    }
  }
}
