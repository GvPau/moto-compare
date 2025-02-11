import puppeteer from "puppeteer";
import { prisma } from "../utils/prisma";

export class ScraperService {
  async scrapeYamaha() {
    console.log("Scraping Yamaha...");
    const browser = await puppeteer.launch({ headless: false }); // Change to true after debugging
    const page = await browser.newPage();
    console.log("Page created");

    try {
      // Navigate to the Yamaha motorcycles page
      await page.goto("https://www.yamaha-motor.eu/es/es/motorcycles/?page=1&perPage=24", {
        waitUntil: "networkidle2",
      });

      await page.waitForSelector(".Row-sc-1t8ifd-0 .Col-sc-1vakr7x-1", { timeout: 5000 });

      // IMPORTANT TO IMPROVE await page.waitFor(2000); // Handle potential lazy-loaded elements
      await new Promise((resolve) => setTimeout(resolve, 5000));

      console.log("Page loaded");

      // Extract motorcycles data
      const cardsHandle = await page.$$(".Row-sc-1t8ifd-0 .Col-sc-1vakr7x-1");
      const motorcycles = await Promise.all(
        cardsHandle.map(async (card) => {
          const title = await card.$eval(".styled__TitleStyled-sc-xvn4uy-5", (el) => el.textContent?.trim() || "Unknown").catch(() => "Unknown");
          const price = await card.$eval(".styled__TextStyled-sc-152x211-5", (el) => el.textContent?.trim() || "Unknown").catch(() => "Unknown");
          const link = await card
            .$eval("a", (a) => (a.href.startsWith("/") ? "https://www.yamaha-motor.eu" + a.getAttribute("href") : a.href))
            .catch(() => "No link");

          return { model: title, price, link };
        })
      );

      console.log(`Found ${motorcycles.length} motorcycles`);

      const filteredMotorcycles = motorcycles.filter((m) => m.model !== "Unknown");
      console.log(`Found ${filteredMotorcycles.length} filtered motorcycles`);

      // Uncomment if saving to the database
      // for (const bike of motorcycles) {
      //   await prisma.motorcycle.create({
      //     data: {
      //       ...bike,
      //       year: new Date().getFullYear(),
      //       engineSize: 0, // Extract from detailed page if available
      //       horsePower: 0,
      //       weight: 0,
      //       type: "naked",
      //     },
      //   });
      // }

      return filteredMotorcycles;
    } catch (error) {
      console.error("Error scraping Yamaha:", error);
      throw error;
    } finally {
      await browser.close();
    }
  }

  async scrapeHonda() {
    console.log("Scraping Honda...");
    // Implement Honda scraping logic
  }

  async scrapeKawasaki() {
    console.log("Scraping Kawasaki...");
    // Implement Kawasaki scraping logic
  }
}
