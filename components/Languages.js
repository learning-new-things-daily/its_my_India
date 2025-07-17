import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const content = {
    en: [
        "Official languages: Hindi, English",
        "22 scheduled languages",
        "Hundreds of regional languages and dialects"
    ],
    hi: [
        "राजकीय भाषाएँ: हिंदी, अंग्रेज़ी",
        "22 अनुसूचित भाषाएँ",
        "सैकड़ों क्षेत्रीय भाषाएँ और बोलियाँ"
    ]
};
const Languages = ({ lang }) => (_jsxs("div", { children: [_jsx("h2", { children: lang === "en" ? "Languages" : "भाषाएँ" }), _jsx("ul", { children: content[lang].map((fact, idx) => _jsx("li", { children: fact }, idx)) })] }));
export default Languages;
