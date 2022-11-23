import { Controller, Get, HttpCode, Render } from '@nestjs/common';
import { AppDataModel } from '../../models/app-data.model';
import { CommonDataService } from 'src/providers/common-data/common-data.service';

@Controller()
export class IndexController {

  constructor(private commonData: CommonDataService){}

  @Render('index')
  @HttpCode(200)
  @Get('')
  public getIndexPage() {
    return { data: {} as AppDataModel };
  }
}
