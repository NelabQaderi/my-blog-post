import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestDataSource } from './database/nest-data-source';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(Object.assign(NestDataSource))],
  controllers: [],
  providers: [],
})
export class AppModule {}
