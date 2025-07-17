import React from "react";

type AboutProps = {
  lang: "en" | "hi";
};

const aboutContent = {
  en: "India, officially the Republic of India, is a country in South Asia...",
  hi: "भारत, आधिकारिक रूप से भारत गणराज्य, दक्षिण एशिया में स्थित एक देश है..."
};

const About: React.FC<AboutProps> = ({ lang }) => (
  <div>
    <h2>{lang === "en" ? "About India" : "भारत के बारे में"}</h2>
    <p>{aboutContent[lang]}</p>
    <a
      href={lang === "en"
        ? "https://en.wikipedia.org/wiki/India"
        : "https://hi.wikipedia.org/wiki/भारत"}
      target="_blank"
      rel="noopener noreferrer"
    >
      {lang === "en" ? "Read more on Wikipedia" : "विकिपीडिया पर और पढ़ें"}
    </a>
  </div>
);

export default About;