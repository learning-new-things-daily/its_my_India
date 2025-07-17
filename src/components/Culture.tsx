import React from "react";

type CultureProps = {
  lang: "en" | "hi";
};

const content = {
  en: {
    title: "Culture",
    desc: "India's culture is very diverse and rich."
  },
  hi: {
    title: "संस्कृति",
    desc: "भारत की संस्कृति बहुत विविध और समृद्ध है।"
  }
};

const Culture: React.FC<CultureProps> = ({ lang }) => (
  <div>
    <h2>{content[lang].title}</h2>
    <p>{content[lang].desc}</p>
  </div>
);

export default Culture;