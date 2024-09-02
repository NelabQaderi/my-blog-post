import { Migration } from 'typeorm';

export const NestDataSource = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'starkbakpostgresql',
  database: 'blogpost',
  entities: [__dirname + '/../**/*.entity{.js,.ts}'],
  migrations: [__dirname + '/migrations/*'],
  synchronize: false,
  logging: false,
  keepconnectionAlive: true,
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'src/migrations',
    subscribersDir: 'subscriber',
  },
};
