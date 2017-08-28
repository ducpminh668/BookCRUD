// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      filename: './DBConnection.js'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'Books',
      user:     'root',
      password: '123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'Books',
      user:     'root',
      password: '123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
