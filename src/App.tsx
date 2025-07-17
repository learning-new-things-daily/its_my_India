import React, { useState } from "react";
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

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const newsApiKey = ""; // Add your NewsAPI key if needed

  return (
    <div className="container">
      <header>
        <h1>{content[lang].title} 🇮🇳</h1>
        <nav>
          {NAV_ITEMS.map(item => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="language-toggle">
          <button onClick={() => setLang('en')}>English</button>
          <button onClick={() => setLang('hi')}>हिन्दी</button>
        </div>
      </header>
      <main>
        <section id="about"><About /></section>
        <section id="geography"><Geography /></section>
        <section id="culture"><Culture /></section>
        <section id="landmarks"><Landmarks /></section>
        <section id="fastfacts"><FastFacts /></section>
        <section id="economy"><Economy /></section>
        <section id="languages"><Languages /></section>
        <section id="news"><News apiKey={newsApiKey} /></section>
      </main>
      <footer>
        <small>Data from restcountries.com &amp; newsapi.org &mdash; Expandable &amp; open source</small>
      </footer>
    </div>
  );
};

export default App;