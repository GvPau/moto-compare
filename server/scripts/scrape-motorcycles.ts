import { prisma } from "../src/utils/prisma";
import { ScraperService } from "../src/services/scraper.service";

async function main() {
  const scraper = new ScraperService();

  console.log("Starting motorcycle data scraping...");

  try {
    console.log("Scraping Yamaha...");
    await scraper.scrapeYamaha();

    console.log("Scraping Honda...");
    await scraper.scrapeHonda();

    // Add other manufacturers

    console.log("Scraping completed successfully!");
  } catch (error) {
    console.error("Error during scraping:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
