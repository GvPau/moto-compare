import { Request, Response, NextFunction } from "express";

export const adminAuth = (req: Request, res: Response, next: NextFunction): void => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
    res.status(401).json({
      success: false,
      error: "Unauthorized",
    });
    return;
  }

  next();
};
