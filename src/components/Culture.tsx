import React from "react";
import Section from "./Section";

type CultureProps = {
  lang: "en" | "hi";
};

const Culture: React.FC<CultureProps> = ({ lang }) => (
  <Section title="Culture & Traditions">
    <p>
      India is known for its diverse culture, languages, religions, festivals, music, dance, and cuisine. Major festivals include Diwali, Holi, Eid, and Christmas.
    </p>
  </Section>
);

export default Culture;