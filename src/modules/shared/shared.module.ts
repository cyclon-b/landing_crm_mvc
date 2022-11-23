import { Module } from '@nestjs/common';
import { CommonDataService } from 'src/providers/common-data/common-data.service';



@Module({
  providers: [
    CommonDataService
  ],
  exports: [
    CommonDataService
  ]
})
export class SharedModule {
}
