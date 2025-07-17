import React from "react";
import Section from "./Section";

type LanguagesProps = {
  lang: "en" | "hi";
};

const Languages: React.FC<LanguagesProps> = ({ lang }) => (
  <Section title="Languages">
    <p>
      India has 22 officially recognized languages and hundreds of regional languages and dialects. Hindi and English are the official languages of the central government.
    </p>
    <ul>
      <li>Hindi (most widely spoken)</li>
      <li>English (associate official language)</li>
      <li>Bengali, Telugu, Marathi, Tamil, Urdu, Gujarati, Malayalam, Kannada, Odia, Punjabi, Assamese, Maithili, and others</li>
    </ul>
  </Section>
);

export default Languages;