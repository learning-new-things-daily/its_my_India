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
  </div>
);

export default About;