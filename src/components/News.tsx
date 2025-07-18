import React from "react";
import Section from "./Section";
import newsData from "../data/news.json";

type NewsArticle = { title: string; url: string };
const articles: NewsArticle[] = newsData;

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
      <ul>
        {articles.map((a: NewsArticle, i: number) => (
          <li key={i}>
            <a href={a.url} target="_blank" rel="noopener noreferrer">
              {a.title}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default News;
