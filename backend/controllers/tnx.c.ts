/**
 * Fetches and extracts transaction data from the provided URL.
 *
 * @param {string} url - The URL of the HTML page to extract transaction data from.
 * @returns {Promise<any>} A promise that resolves to the extracted transaction data.
 */

import { Request, Response } from "express";
import { extractTextFromHTML } from "../utils/extractData";
import { geminiSummary } from "../utils/generateSummary";
import { formatSummary } from "../utils/lib";

export const getTnxData = async (req: Request, res: Response) => {
  try {
    const { html } = req.body;
    if (!html) {
      res.status(400).json({ error: "HTML is required", data: null });
      return;
    }

    const extracttedData = await extractTextFromHTML(html);
    const aiSummary = await geminiSummary(extracttedData, html);
    const formattedSummary = formatSummary(aiSummary);

    res.json({
      success: true,
      data: { summary: formattedSummary },
      error: null,
    });
  } catch (error) {
    console.error("Error fetching transaction data:", error);
    res.status(500).json({ error: "Internal Server Error", data: null });
  }
};
