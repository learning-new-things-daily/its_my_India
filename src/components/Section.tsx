import React from "react";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className="section">
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);

export default Section;