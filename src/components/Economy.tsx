/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Section from "./Section";

type EconomyProps = {
  lang: "en" | "hi";
};

const Economy: React.FC<EconomyProps> = ({ lang }) => (
  <Section title="Economy">
    <ul>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <li>India is the world's 5th largest economy by nominal GDP.</li>
      <li>Major industries: IT, textiles, agriculture, pharmaceuticals, steel, automotive.</li>
      <li>Major exports: Petroleum products, gems and jewelry, textiles, machinery, chemicals.</li>
      <li>Currency: Indian Rupee (INR)</li>
      <li>India&apos;s economy is growing rapidly.</li>
    </ul>
  </Section>
);

export default Economy;