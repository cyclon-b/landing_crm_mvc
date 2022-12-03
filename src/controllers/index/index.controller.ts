import { Controller, Get, HttpCode, Render } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { ResponseDataBuilderService } from './../../providers/response-data-builder/response-data-builder.service';

@Controller()
export class IndexController {
  constructor(private responseBuilder: ResponseDataBuilderService) {}

  @Render('index')
  @HttpCode(200)
  @Get('')
  public async getIndexPage() {
    const data = await lastValueFrom(
      this.responseBuilder.buildCommonResponseData(),
    );
    return { data };
  }
}
