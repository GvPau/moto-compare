import { PrismaClient } from "@prisma/client";
import { motorcycles } from "../src/mocks/motorcycles";

const prisma = new PrismaClient();

async function main() {
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

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
