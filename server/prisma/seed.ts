import { PrismaClient } from "@prisma/client";
import { seedMotorcycles } from "./motorcycles.seed";
import { seedHelmets } from "./helmets.seed";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  try {
    // Clear existing data (optional)
    await prisma.motorcycle.deleteMany();
    await prisma.helmet.deleteMany();

    // Run seeds
    console.log("🏍️  Seeding motorcycles...");
    await seedMotorcycles(prisma);

    console.log("🪖 Seeding helmets...");
    await seedHelmets(prisma);

    console.log("✅ Seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error during seeding:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
