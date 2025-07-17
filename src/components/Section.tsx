import React from "react";

type SectionProps = {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children, icon }) => (
  <section className="section">
    <h2>
      {icon} {title}
    </h2>
    <div>{children}</div>
  </section>
);

export default Section;