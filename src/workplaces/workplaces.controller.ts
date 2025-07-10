import { Controller, Get } from '@nestjs/common';
import { WorkplacesService } from './workplaces.service';

@Controller('workplaces')
export class WorkplacesController {
  constructor(private readonly workplacesService: WorkplacesService) {}

  @Get('most-active')
  getMostActive() {
    return this.workplacesService.getMostActiveWorkplaces();
  }
}
