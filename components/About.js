import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const aboutContent = {
    en: "India, officially the Republic of India, is a country in South Asia...",
    hi: "भारत, आधिकारिक रूप से भारत गणराज्य, दक्षिण एशिया में स्थित एक देश है..."
};
const About = ({ lang }) => (_jsxs("div", { children: [_jsx("h2", { children: lang === "en" ? "About India" : "भारत के बारे में" }), _jsx("p", { children: aboutContent[lang] }), _jsx("a", { href: lang === "en"
                ? "https://en.wikipedia.org/wiki/India"
                : "https://hi.wikipedia.org/wiki/भारत", target: "_blank", rel: "noopener noreferrer", children: lang === "en" ? "Read more on Wikipedia" : "विकिपीडिया पर और पढ़ें" })] }));
export default About;
