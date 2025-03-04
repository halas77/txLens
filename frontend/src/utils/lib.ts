import axios from "axios";
import { SUPPORTED_DOMAINS } from "./constants";

export const checkCurrentSite = async () => {
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (tab.url) {
      const url = new URL(tab.url);
      const isSupported: boolean | null = SUPPORTED_DOMAINS.some((domain) =>
        url.hostname.endsWith(domain)
      );
      return isSupported;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error checking current site:", error);
    return false;
  }
};

export const getUrlFromChrome = async () => {
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    return tab.url;
  } catch (error) {
    console.error("Error fetching URL from Chrome:", error);
    return null;
  }
};

export const fetchSummary = async (url: string) => {
  try {
    const { data: html } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    if (html) {
      const res = await axios.post("https://txlens.onrender.com/api/tx-data", {
        html,
      });
      return res.data;
    }
  } catch (error) {
    console.error("Error fetching transaction data:", error);
    return error;
  }
};
