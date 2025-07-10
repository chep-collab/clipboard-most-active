import { Module } from '@nestjs/common';
import { WorkplacesModule } from './workplaces/workplaces.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, WorkplacesModule],
})
export class AppModule {}



