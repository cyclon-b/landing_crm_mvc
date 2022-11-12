import { Module } from '@nestjs/common';
import { IndexController } from './controllers/index/index.controller';


@Module({
  imports: [],
  controllers: [IndexController],
  providers: [],
})
export class AppModule {
}
