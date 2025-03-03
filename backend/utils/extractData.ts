import axios from "axios";
import * as cheerio from "cheerio";
import { extractRelevantData } from "./lib";

export async function extractTextFromHTML(url: string) {
  try {
    console.log("url", url);
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    console.log('html', html)

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
