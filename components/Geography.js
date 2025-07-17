import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const content = {
    en: {
        title: "Geography",
        desc: "India is the seventh-largest country by area, located in South Asia."
    },
    hi: {
        title: "भूगोल",
        desc: "भारत क्षेत्रफल के हिसाब से सातवां सबसे बड़ा देश है, जो दक्षिण एशिया में स्थित है।"
    }
};
const Geography = ({ lang }) => (_jsxs("div", { children: [_jsx("h2", { children: content[lang].title }), _jsx("p", { children: content[lang].desc })] }));
export default Geography;
