import { Module } from '@nestjs/common';
import { PrismaService } from '../../providers/prisma/prisma.service';

@Module({
  providers: [
    PrismaService
  ],
})
export class SharedModule {
}
