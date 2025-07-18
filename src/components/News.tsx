import React from "react";
import Section from "./Section";
import newsData from "../data/news.json";

type NewsArticle = { title: string; url: string };

type NewsProps = {
  lang: "en" | "hi";
};

const News: React.FC<NewsProps> = ({ lang }) => {
  const isValid = Array.isArray(newsData) && newsData.length > 0;

  return (
    <Section title={lang === "hi" ? "🗞️ ताज़ा समाचार" : "🗞️ Latest News"}>
      {!isValid ? (
        <p>{lang === "hi" ? "कोई समाचार नहीं मिला।" : "No news available."}</p>
      ) : (
        <ul>
          {(newsData as NewsArticle[]).map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
};

export default News;
