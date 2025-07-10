import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WorkplacesService {
  constructor(private prisma: PrismaService) {}

  async getMostActiveWorkplaces(limit = 5) {
    const [workplaces, shifts] = await Promise.all([
      this.prisma.workplace.findMany(),
      this.prisma.shift.findMany(),
    ]);

    const shiftCountMap: Record<string, number> = {};

    for (const shift of shifts) {
      if (!shift.workplaceId) continue;
      shiftCountMap[shift.workplaceId] = (shiftCountMap[shift.workplaceId] || 0) + 1;
    }

    return workplaces
      .map(wp => ({
        ...wp,
        shiftCount: shiftCountMap[wp.id] || 0,
      }))
      .filter(wp => wp.shiftCount > 0)
      .sort((a, b) => b.shiftCount - a.shiftCount)
      .slice(0, limit);
  }
}

