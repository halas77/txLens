import axios from "axios";
import * as cheerio from "cheerio";
import { extractRelevantData } from "./lib";

export async function extractTextFromHTML(url: string) {
  try {
    const { data: html } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    const $ = cheerio.load(html);

    console.log("html", html);

    const cleanedData = await extractRelevantData($);

    if (cleanedData) {
      return cleanedData;
    } else {
      return "Invalid URL";
    }
  } catch (error) {
    throw new Error(
      `Scraping failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
