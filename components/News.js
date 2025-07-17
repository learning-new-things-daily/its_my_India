import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Section from "./Section";
const News = ({ apiKey, lang }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        if (!apiKey)
            return;
        setLoading(true);
        fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=${apiKey}`)
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
    if (!apiKey)
        return null;
    return (_jsxs(Section, { title: lang === "hi" ? "ताज़ा समाचार" : "Latest News", children: [loading && _jsx("p", { children: lang === "hi" ? "लोड हो रहा है..." : "Loading..." }), error && _jsx("p", { children: lang === "hi" ? "समाचार उपलब्ध नहीं है।" : "News unavailable." }), _jsx("ul", { children: articles.map((a, i) => (_jsx("li", { children: _jsx("a", { href: a.url, target: "_blank", rel: "noopener noreferrer", children: a.title }) }, i))) })] }));
};
export default News;
