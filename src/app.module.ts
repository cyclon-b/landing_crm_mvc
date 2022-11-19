import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndexController } from './controllers/index/index.controller';
import { CommonDataEntity } from './entities/common-data.entity';
import { NavigationEntity } from './entities/navigation.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '../db.sqlite',
      entities: [
        NavigationEntity,
        CommonDataEntity,
      ],
    }),
  ],
  controllers: [IndexController],
  providers: [],
})
export class AppModule { }
