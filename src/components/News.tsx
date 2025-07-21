import React, { useEffect, useState } from "react";
import Section from "./Section";

type NewsArticle = {
  title: string;
  url: string;
};

type NewsProps = {
  lang: "en" | "hi";
};

const News: React.FC<NewsProps> = ({ lang }) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    import("../data/news.json")
      .then((data) => setArticles(data.default))
      .catch((err) => {
        console.error("❌ Could not load news.json", err);
        setArticles([]); // fallback
      });
  }, []);

  if (articles.length === 0) {
    return (
      <Section title={lang === "hi" ? "ताज़ा समाचार" : "Latest News"}>
        <p>{lang === "hi" ? "कोई समाचार नहीं मिला।" : "No news available."}</p>
      </Section>
    );
  }

  return (
    <Section title={lang === "hi" ? "ताज़ा समाचार" : "Latest News"}>
      <ul className="list-disc pl-5 space-y-2">
        {articles.map((article, index) => (
          <li key={index}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default News;
