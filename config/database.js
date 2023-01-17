module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf3frl9gp3jl0q49pdj0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarstore_9ame'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'rYAmvSvQ9vI4anvcOgQ0w0h8bp2chRfE'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
