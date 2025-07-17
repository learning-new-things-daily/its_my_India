import React from "react";

type LandmarksProps = {
  lang: "en" | "hi";
};

const content = {
  en: {
    title: "Landmarks",
    items: [
      "Taj Mahal",
      "Qutub Minar",
      "Gateway of India",
      "Red Fort"
    ]
  },
  hi: {
    title: "प्रसिद्ध स्थल",
    items: [
      "ताज महल",
      "कुतुब मीनार",
      "गेटवे ऑफ इंडिया",
      "लाल किला"
    ]
  }
};

const Landmarks: React.FC<LandmarksProps> = ({ lang }) => (
  <div>
    <h2>{content[lang].title}</h2>
    <ul>
      {content[lang].items.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
  </div>
);

export default Landmarks;