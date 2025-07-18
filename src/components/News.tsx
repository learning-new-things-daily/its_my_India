import React from "react";
import Section from "./Section";

let newsData: { title: string; url: string }[] = [];

try {
  newsData = require("../data/news.json");
} catch (err) {
  console.error("❌ Could not load news.json", err);
}

type NewsArticle = {
  title: string;
  url: string;
};

type NewsProps = {
  lang: "en" | "hi";
};

const News: React.FC<NewsProps> = ({ lang }) => {
  if (!newsData || newsData.length === 0) {
    return (
      <Section title={lang === "hi" ? "ताज़ा समाचार" : "Latest News"}>
        <p>{lang === "hi" ? "कोई समाचार नहीं मिला।" : "No news available."}</p>
      </Section>
    );
  }

  return (
    <Section title={lang === "hi" ? "ताज़ा समाचार" : "Latest News"}>
      <ul className="list-disc pl-5">
        {newsData.map((article, i) => (
          <li key={i}>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default News;
