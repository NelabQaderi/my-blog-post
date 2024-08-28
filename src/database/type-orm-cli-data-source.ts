import { DataSource, DataSourceOptions } from 'typeorm';
import { NestDataSource } from './nest-data-source';
export const AppDataSource = new DataSource(
  NestDataSource as DataSourceOptions,
);
