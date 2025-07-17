import React from "react";

const aboutContent = {
  en: "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the most populous country, and the most populous democracy in the world.",
  hi: "भारत, आधिकारिक रूप से भारत गणराज्य, दक्षिण एशिया में स्थित एक देश है। यह क्षेत्रफल के हिसाब से सातवां सबसे बड़ा, जनसंख्या में सबसे बड़ा और दुनिया का सबसे बड़ा लोकतंत्र है।"
};

const About: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => (
  <div>
    <h2>{lang === 'en' ? 'About India' : 'भारत के बारे में'}</h2>
    <p>{aboutContent[lang]}</p>
  </div>
);

export default About;