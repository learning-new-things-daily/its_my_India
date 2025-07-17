import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const content = {
    en: {
        title: "Landmarks",
        items: [
            "Taj Mahal",
            "Qutub Minar",
            "Gateway of India",
            "Red Fort"
        ]
    },
    hi: {
        title: "प्रसिद्ध स्थल",
        items: [
            "ताज महल",
            "कुतुब मीनार",
            "गेटवे ऑफ इंडिया",
            "लाल किला"
        ]
    }
};
const Landmarks = ({ lang }) => (_jsxs("div", { children: [_jsx("h2", { children: content[lang].title }), _jsx("ul", { children: content[lang].items.map((item, idx) => _jsx("li", { children: item }, idx)) })] }));
export default Landmarks;
