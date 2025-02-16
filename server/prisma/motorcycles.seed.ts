import { PrismaClient } from "@prisma/client";
import { motorcycles } from "../src/mocks/motorcycles";

export async function seedMotorcycles(prisma: PrismaClient) {
  console.log(`Start seeding ...`);

  // Clear existing data
  await prisma.motorcycle.deleteMany();

  // Insert new data
  for (const motorcycle of motorcycles) {
    const result = await prisma.motorcycle.create({
      data: motorcycle,
    });
    console.log(`Created motorcycle with id: ${result.id}`);
  }

  console.log(`Seeding finished.`);
}

// Allow running directly
if (require.main === module) {
  const prisma = new PrismaClient();
  seedMotorcycles(prisma)
    .catch((error) => {
      console.error(error);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
