import React, { useEffect, useState } from "react";
import Section from "./Section";

type CountryData = {
  population: number;
  region: string;
  area: number;
  flags: { svg: string };
  capital: string[];
  subregion: string;
  timezones: string[];
  currencies: Record<string, { name: string; symbol: string }>;
  languages: Record<string, string>;
};

type FastFactsProps = {
  lang: "en" | "hi";
};

const content = {
  en: [
    "Population: 1.4+ billion",
    "States: 28, Union Territories: 8",
    "Capital: New Delhi",
  ],
  hi: [
    "जनसंख्या: 1.4+ अरब",
    "राज्य: 28, केंद्र शासित प्रदेश: 8",
    "राजधानी: नई दिल्ली",
  ],
};

const FastFacts: React.FC<FastFactsProps> = ({ lang }) => {
  const [data, setData] = useState<CountryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/name/india?fields=population,region,area,flags,capital,subregion,timezones,currencies,languages"
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res[0]);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <Section title="Fast Facts">
      {loading && <p>Loading...</p>}
      {error && <p>Data unavailable. Please try again later.</p>}
      {data && (
        <div className="fast-facts">
          <img src={data.flags.svg} alt="India Flag" className="flag" />
          <ul>
            <li>
              <strong>Population:</strong> {data.population.toLocaleString()}
            </li>
            <li>
              <strong>Region:</strong> {data.region}
            </li>
            <li>
              <strong>Subregion:</strong> {data.subregion}
            </li>
            <li>
              <strong>Area:</strong> {data.area.toLocaleString()} km²
            </li>
            <li>
              <strong>Capital:</strong> {data.capital?.join(", ")}
            </li>
            <li>
              <strong>Timezones:</strong> {data.timezones.join(", ")}
            </li>
            <li>
              <strong>Currencies:</strong>{" "}
              {Object.values(data.currencies)
                .map((c) => `${c.name} (${c.symbol})`)
                .join(", ")}
            </li>
            <li>
              <strong>Languages:</strong>{" "}
              {Object.values(data.languages).join(", ")}
            </li>
            <li>
              <strong>Calling Code:</strong> +91
            </li>
            <li>
              <strong>Internet TLD:</strong> .in
            </li>
          </ul>
        </div>
      )}
      <div>
        <h2>{lang === "en" ? "Fast Facts" : "त्वरित तथ्य"}</h2>
        <ul>
          {content[lang].map((fact, idx) => (
            <li key={idx}>{fact}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default FastFacts;