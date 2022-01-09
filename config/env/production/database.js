module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
      database: env('DATABASE_NAME', 'strapi-production'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD')
    },
    options: {
      pool: {
        min: 0,
        max: 15,
        idleTimeoutMillis: 30000,
        createTimeoutMillis: 30000,
        acquireTimeoutMillis: 30000,
      },
    },
    debug: false,
  },
});



