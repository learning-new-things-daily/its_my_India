import React from "react";

type GeographyProps = {
  lang: "en" | "hi";
};

const content = {
  en: {
    title: "Geography",
    desc: "India is the seventh-largest country by area, located in South Asia."
  },
  hi: {
    title: "भूगोल",
    desc: "भारत क्षेत्रफल के हिसाब से सातवां सबसे बड़ा देश है, जो दक्षिण एशिया में स्थित है।"
  }
};

const Geography: React.FC<GeographyProps> = ({ lang }) => (
  <div>
    <h2>{content[lang].title}</h2>
    <p>{content[lang].desc}</p>
  </div>
);

export default Geography;