import { Module } from '@nestjs/common';
import { WorkplacesService } from './workplaces.service';
import { WorkplacesController } from './workplaces.controller';
import { PrismaModule } from '../prisma/prisma.module'; // ✅ this is the fix

@Module({
  imports: [PrismaModule], // ✅ add this
  controllers: [WorkplacesController],
  providers: [WorkplacesService],
})
export class WorkplacesModule {}



