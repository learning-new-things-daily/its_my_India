import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const API_KEY = process.env.NEWS_API_KEY;
if (!API_KEY) {
  console.error("❌ NEWS_API_KEY is not set.");
  process.exit(1);
}

const URL = `https://newsapi.org/v2/everything?q=india&pageSize=5&sortBy=publishedAt&apiKey=${API_KEY}`;

try {
  const res = await fetch(URL);
  const json = await res.json();

  const articles = json.articles?.map((a) => ({
    title: a.title,
    url: a.url,
  })) || [];

  const outputPath = path.resolve(__dirname, "../src/data/news.json");
  fs.writeFileSync(outputPath, JSON.stringify(articles, null, 2));
  console.log(`✅ Saved ${articles.length} articles to news.json`);
} catch (err) {
  console.error("❌ Failed to fetch news:", err.message);
  process.exit(1);
}
