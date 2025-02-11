import { Router } from "express";
import { ScraperService } from "../services/scraper.service";

const router = Router();
const scraperService = new ScraperService();

router.post("/yamaha", async (req, res) => {
  try {
    const results = await scraperService.scrapeYamaha();
    res.json({ success: true, data: results });
  } catch (error) {
    console.error("Error scraping Yamaha:", error);
    res.status(500).json({ success: false, error: "Failed to scrape Yamaha data" });
  }
});

router.post("/honda", async (req, res) => {
  try {
    const results = await scraperService.scrapeHonda();
    res.json({ success: true, data: results });
  } catch (error) {
    console.error("Error scraping Honda:", error);
    res.status(500).json({ success: false, error: "Failed to scrape Honda data" });
  }
});

router.post("/all", async (req, res) => {
  try {
    const results = await Promise.all([scraperService.scrapeYamaha(), scraperService.scrapeHonda(), scraperService.scrapeKawasaki()]);

    res.json({
      success: true,
      data: {
        yamaha: results[0],
        honda: results[1],
        kawasaki: results[2],
      },
    });
  } catch (error) {
    console.error("Error scraping all manufacturers:", error);
    res.status(500).json({ success: false, error: "Failed to scrape motorcycle data" });
  }
});

export default router;
