import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Section from "./Section";
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
const FastFacts = ({ lang }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/name/india?fields=population,region,area,flags,capital,subregion,timezones,currencies,languages")
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
    return (_jsxs(Section, { title: "Fast Facts", children: [loading && _jsx("p", { children: "Loading..." }), error && _jsx("p", { children: "Data unavailable. Please try again later." }), data && (_jsxs("div", { className: "fast-facts", children: [_jsx("img", { src: data.flags.svg, alt: "India Flag", className: "flag" }), _jsxs("ul", { children: [_jsxs("li", { children: [_jsx("strong", { children: "Population:" }), " ", data.population.toLocaleString()] }), _jsxs("li", { children: [_jsx("strong", { children: "Region:" }), " ", data.region] }), _jsxs("li", { children: [_jsx("strong", { children: "Subregion:" }), " ", data.subregion] }), _jsxs("li", { children: [_jsx("strong", { children: "Area:" }), " ", data.area.toLocaleString(), " km\u00B2"] }), _jsxs("li", { children: [_jsx("strong", { children: "Capital:" }), " ", data.capital?.join(", ")] }), _jsxs("li", { children: [_jsx("strong", { children: "Timezones:" }), " ", data.timezones.join(", ")] }), _jsxs("li", { children: [_jsx("strong", { children: "Currencies:" }), " ", Object.values(data.currencies)
                                        .map((c) => `${c.name} (${c.symbol})`)
                                        .join(", ")] }), _jsxs("li", { children: [_jsx("strong", { children: "Languages:" }), " ", Object.values(data.languages).join(", ")] }), _jsxs("li", { children: [_jsx("strong", { children: "Calling Code:" }), " +91"] }), _jsxs("li", { children: [_jsx("strong", { children: "Internet TLD:" }), " .in"] })] })] })), _jsxs("div", { children: [_jsx("h2", { children: lang === "en" ? "Fast Facts" : "त्वरित तथ्य" }), _jsx("ul", { children: content[lang].map((fact, idx) => (_jsx("li", { children: fact }, idx))) })] }), _jsxs("div", { children: [_jsx("h2", { children: lang === "en" ? "National Symbols" : "राष्ट्रीय प्रतीक" }), _jsx("ul", { children: nationalSymbols[lang].map((symbol, idx) => (_jsxs("li", { children: [_jsxs("strong", { children: [symbol.label, ":"] }), " ", symbol.value] }, idx))) })] }), _jsxs("div", { children: [_jsx("h2", { children: lang === "en" ? "Festivals" : "त्योहार" }), _jsx("ul", { children: festivals[lang].map((festival, idx) => (_jsx("li", { children: festival }, idx))) })] })] }));
};
export default FastFacts;
