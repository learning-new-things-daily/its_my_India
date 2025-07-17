import React from "react";
import Section from "./Section";

type GeographyProps = {
  lang: "en" | "hi";
};

const Geography: React.FC<GeographyProps> = ({ lang }) => (
  <Section title="Geography">
    <ul>
      <li>Location: South Asia</li>
      <li>Borders: Pakistan, China, Nepal, Bhutan, Bangladesh, Myanmar</li>
      <li>Major Rivers: Ganges, Yamuna, Brahmaputra</li>
      <li>Mountains: Himalayas, Western & Eastern Ghats</li>
    </ul>
  </Section>
);

export default Geography;