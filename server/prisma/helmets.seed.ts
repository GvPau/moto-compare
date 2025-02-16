import { PrismaClient } from "@prisma/client";
import { helmets } from "../src/mocks/helmets";

export async function seedHelmets(prisma: PrismaClient) {
  console.log(`Seeding helmets...`);

  // Clear existing data
  await prisma.helmet.deleteMany();

  // Insert new data
  for (const helmet of helmets) {
    await prisma.helmet.create({
      data: helmet,
    });
  }

  console.log(`Created ${helmets.length} helmets`);
}

// Allow running directly
if (require.main === module) {
  const prisma = new PrismaClient();
  seedHelmets(prisma)
    .catch((error) => {
      console.error(error);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
