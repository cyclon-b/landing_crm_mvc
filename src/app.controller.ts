import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  @Render('index')
  getIndex() {
    return {message: 'Hello, NEST!', title: 'Hello app'};
  }
}
