import React from "react";

type AboutProps = {
  lang: "en" | "hi";
};

const aboutContent = {
  en: "India, officially the Republic of India, is a country in South Asia...",
  hi: "भारत, आधिकारिक रूप से भारत गणराज्य, दक्षिण एशिया में स्थित एक देश है..."
};

const wikiLinks = {
  en: "https://en.wikipedia.org/wiki/India",
  hi: "https://hi.wikipedia.org/wiki/भारत"
};

const headings = {
  en: "About India",
  hi: "भारत के बारे में"
};

const About: React.FC<AboutProps> = ({ lang }) => (
  <div>
    <h2>
      <a
        href={wikiLinks[lang]}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }} // Optional: makes it look like a heading
      >
        {headings[lang]}
      </a>
    </h2>
    <p>{aboutContent[lang]}</p>
    <a
      href={wikiLinks[lang]}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* {lang === "en" ? "Read more on Wikipedia" : "विकिपीडिया पर और पढ़ें"} */}
    </a>
  </div>
);

export default About;
