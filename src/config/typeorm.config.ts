import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

// const config = require('config');
dotenv.config();

export function typeOrmConfig(): TypeOrmModuleOptions {

  return connectionOptions();
}

function connectionOptions(): TypeOrmModuleOptions {
  // const dbConfig: any = config.get('db');
  return {
    type: "sqlite",// || dbConfig.type,
    database: process.env.DB_NAME || "nest-aws", //|| dbConfig.database,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true //|| dbConfig.synchronize
  };
}
