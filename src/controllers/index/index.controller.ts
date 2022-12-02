import { Controller, Get, HttpCode, Render } from '@nestjs/common';
import { AppDataModel } from '../../models/app-data.model';

@Controller()
export class IndexController {
  @Render('index')
  @HttpCode(200)
  @Get('')
  public getIndexPage() {
    return { data: {} as AppDataModel };
  }
}
