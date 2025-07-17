import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const content = {
    en: [
        "India is the world's 5th largest economy by nominal GDP.",
        "Major industries: IT, textiles, agriculture, pharmaceuticals, steel, automotive.",
        "Major exports: Petroleum products, gems and jewelry, textiles, machinery, chemicals.",
        "Currency: Indian Rupee (INR)",
        "India's economy is growing rapidly."
    ],
    hi: [
        "भारत नाममात्र जीडीपी के हिसाब से दुनिया की 5वीं सबसे बड़ी अर्थव्यवस्था है।",
        "मुख्य उद्योग: आईटी, वस्त्र, कृषि, दवाइयाँ, इस्पात, ऑटोमोबाइल।",
        "मुख्य निर्यात: पेट्रोलियम उत्पाद, रत्न और आभूषण, वस्त्र, मशीनरी, रसायन।",
        "मुद्रा: भारतीय रुपया (INR)",
        "भारत की अर्थव्यवस्था तेजी से बढ़ रही है।"
    ]
};
const Economy = ({ lang }) => (_jsxs("div", { children: [_jsx("h2", { children: lang === "en" ? "Economy" : "अर्थव्यवस्था" }), _jsx("ul", { children: content[lang].map((fact, idx) => _jsx("li", { children: fact }, idx)) })] }));
export default Economy;
