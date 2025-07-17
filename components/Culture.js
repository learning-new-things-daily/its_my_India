import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const content = {
    en: {
        title: "Culture",
        desc: "India's culture is very diverse and rich."
    },
    hi: {
        title: "संस्कृति",
        desc: "भारत की संस्कृति बहुत विविध और समृद्ध है।"
    }
};
const Culture = ({ lang }) => (_jsxs("div", { children: [_jsx("h2", { children: content[lang].title }), _jsx("p", { children: content[lang].desc })] }));
export default Culture;
