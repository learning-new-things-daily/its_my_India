import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Geography from "./components/Geography";
import Culture from "./components/Culture";
import Landmarks from "./components/Landmarks";
import FastFacts from "./components/FastFacts";
import News from "./components/News";
import Economy from "./components/Economy";
import Languages from "./components/Languages";
const NAV_ITEMS = [
    { id: "about", label: "About" },
    { id: "geography", label: "Geography" },
    { id: "culture", label: "Culture & Traditions" },
    { id: "landmarks", label: "Landmarks" },
    { id: "fastfacts", label: "Fast Facts" },
    { id: "economy", label: "Economy" },
    { id: "languages", label: "Languages" },
    { id: "news", label: "News" }
];
const content = {
    en: {
        title: "It's My India",
        description: "Welcome to a colorful and diverse nation. Explore the beauty, culture, and heritage of India!"
    },
    hi: {
        title: "मेरा भारत",
        description: "एक रंगीन और विविध देश में आपका स्वागत है। भारत की सुंदरता, संस्कृति और विरासत का अन्वेषण करें!"
    }
};
const App = () => {
    const [lang, setLang] = useState('en');
    const newsApiKey = ""; // Add your NewsAPI key if needed
    return (_jsxs("div", { className: "container", children: [_jsxs("header", { children: [_jsxs("h1", { children: [content[lang].title, " \uD83C\uDDEE\uD83C\uDDF3"] }), _jsx("nav", { children: NAV_ITEMS.map(item => (_jsx("a", { href: `#${item.id}`, children: item.label }, item.id))) }), _jsxs("div", { className: "language-toggle", children: [_jsx("button", { onClick: () => setLang('en'), children: "English" }), _jsx("button", { onClick: () => setLang('hi'), children: "\u0939\u093F\u0928\u094D\u0926\u0940" })] })] }), _jsxs("main", { children: [_jsx("section", { id: "about", children: _jsx(About, { lang: lang }) }), _jsx("section", { id: "geography", children: _jsx(Geography, { lang: lang }) }), _jsx("section", { id: "culture", children: _jsx(Culture, { lang: lang }) }), _jsx("section", { id: "landmarks", children: _jsx(Landmarks, { lang: lang }) }), _jsx("section", { id: "fastfacts", children: _jsx(FastFacts, { lang: lang }) }), _jsx("section", { id: "economy", children: _jsx(Economy, { lang: lang }) }), _jsx("section", { id: "languages", children: _jsx(Languages, { lang: lang }) }), _jsx("section", { id: "news", children: _jsx(News, { apiKey: newsApiKey, lang: lang }) })] }), _jsx("footer", { children: _jsx("small", { children: "Data from restcountries.com & newsapi.org \u2014 Expandable & open source" }) })] }));
};
export default App;
