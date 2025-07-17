import React, { useEffect, useState } from "react";
import Section from "./Section";

type NewsArticle = { title: string; url: string };
type NewsProps = {
  apiKey: string;
  lang: "en" | "hi";
};

const News: React.FC<NewsProps> = ({ apiKey, lang }) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!apiKey) return;
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((res) => {
        setArticles(res.articles || []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [apiKey]);

  if (!apiKey) return null;
  return (
    <Section title="Latest News">
      {loading && <p>Loading...</p>}
      {error && <p>News unavailable.</p>}
      <ul>
        {articles.map((a, i) => (
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