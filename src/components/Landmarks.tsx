import React from "react";
import Section from "./Section";

type LandmarksProps = {
  lang: "en" | "hi";
};

const Landmarks: React.FC<LandmarksProps> = ({ lang }) => (
  <Section title="Landmarks">
    <ul>
      <li>Taj Mahal</li>
      <li>Qutub Minar</li>
      <li>Gateway of India</li>
      <li>Red Fort</li>
      <li>India Gate</li>
    </ul>
  </Section>
);

export default Landmarks;