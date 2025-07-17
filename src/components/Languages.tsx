import React from "react";

type LanguagesProps = {
  lang: "en" | "hi";
};

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

const Languages: React.FC<LanguagesProps> = ({ lang }) => (
  <div>
    <h2>{lang === "en" ? "Languages" : "भाषाएँ"}</h2>
    <ul>
      {content[lang].map((fact, idx) => <li key={idx}>{fact}</li>)}
    </ul>
  </div>
);

export default Languages;