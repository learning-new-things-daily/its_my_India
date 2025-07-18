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

const nationalSymbols = {
  en: [
    { label: "National Animal", value: "Bengal Tiger", link: "https://en.wikipedia.org/wiki/Bengal_tiger" },
    { label: "National Bird", value: "Indian Peacock", link: "https://en.wikipedia.org/wiki/Indian_peafowl" },
    { label: "National Flower", value: "Lotus", link: "https://en.wikipedia.org/wiki/Nelumbo_nucifera" },
    { label: "National Tree", value: "Banyan", link: "https://en.wikipedia.org/wiki/Ficus_benghalensis" },
    { label: "National Fruit", value: "Mango", link: "https://en.wikipedia.org/wiki/Mango" },
    { label: "National Sport", value: "Hockey", link: "https://en.wikipedia.org/wiki/Field_hockey_in_India" }
  ],
  hi: [
    { label: "राष्ट्रीय पशु", value: "बंगाल टाइगर", link: "https://hi.wikipedia.org/wiki/बंगाल_बाघ" },
    { label: "राष्ट्रीय पक्षी", value: "भारतीय मोर", link: "https://hi.wikipedia.org/wiki/भारतीय_मोर" },
    { label: "राष्ट्रीय फूल", value: "कमल", link: "https://hi.wikipedia.org/wiki/कमल" },
    { label: "राष्ट्रीय वृक्ष", value: "बरगद", link: "https://hi.wikipedia.org/wiki/बरगद" },
    { label: "राष्ट्रीय फल", value: "आम", link: "https://hi.wikipedia.org/wiki/आम" },
    { label: "राष्ट्रीय खेल", value: "हॉकी", link: "https://hi.wikipedia.org/wiki/हॉकी" }
  ]
};

const festivals = {
  en: ["Diwali", "Holi", "Eid", "Christmas", "Navratri"],
  hi: ["दीवाली", "होली", "ईद", "क्रिसमस", "नवरात्रि"],
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

      <div>
        <h2>{lang === "en" ? "National Symbols" : "राष्ट्रीय प्रतीक"}</h2>
        <ul>
          {nationalSymbols[lang].map((symbol, idx) => (
            <li key={idx}>
              <strong>{symbol.label}:</strong>{" "}
              <a
                href={symbol.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {symbol.value}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>{lang === "en" ? "Festivals" : "त्योहार"}</h2>
        <ul>
          {festivals[lang].map((festival, idx) => (
            <li key={idx}>{festival}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default FastFacts;
