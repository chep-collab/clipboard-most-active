import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create workplaces
  const wp1 = await prisma.workplace.create({
    data: {
      name: 'Nairobi Hospital',
    },
  });

  const wp2 = await prisma.workplace.create({
    data: {
      name: 'Kilimani Clinic',
    },
  });

  // Create shifts for each workplace
  await prisma.shift.createMany({
    data: [
      { workplaceId: wp1.id },
      { workplaceId: wp1.id },
      { workplaceId: wp2.id },
      { workplaceId: wp2.id },
      { workplaceId: wp2.id },
    ],
  });

  console.log('✅ Seed data inserted successfully!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
