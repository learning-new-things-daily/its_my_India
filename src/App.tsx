import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Geography from "./components/Geography";
import Culture from "./components/Culture";
import Landmarks from "./components/Landmarks";
import FastFacts from "./components/FastFacts";
// import News from "./components/News";
import Economy from "./components/Economy";
import Languages from "./components/Languages";

const NAV_ITEMS = [
  { id: "about", label: "📖 About" },
  { id: "geography", label: "🗺️ Geography" },
  { id: "culture", label: "🎭 Culture & Traditions" },
  { id: "landmarks", label: "🏯 Landmarks" },
  { id: "fastfacts", label: "⚡ Fast Facts" },
  { id: "economy", label: "💰 Economy" },
  { id: "languages", label: "🗣️ Languages" },
  { id: "news", label: "📰 News" }
];

const content = {
  en: {
    title: "🇮🇳 It's My India",
    description: "Welcome to a colorful, vibrant nation. Explore the beauty, stories, and spirit of India!"
  },
  hi: {
    title: "🇮🇳 मेरा भारत",
    description: "एक रंगीन और जीवंत देश में आपका स्वागत है। भारत की सुंदरता, कहानियाँ और आत्मा को जानें!"
  }
};

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  // const newsApiKey = ""; // Add NewsAPI key if needed

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="container">
      <header>
        <h1 className="main-title">{content[lang].title}</h1>
        <p className="subtitle">{content[lang].description}</p>

        <nav className="nav-bar">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="nav-button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="language-toggle">
          <button
            onClick={() => setLang('en')}
            className={lang === 'en' ? "active-lang" : ""}
          >
            🇬🇧 English
          </button>
          <button
            onClick={() => setLang('hi')}
            className={lang === 'hi' ? "active-lang" : ""}
          >
            🇮🇳 हिन्दी
          </button>
        </div>
      </header>

      <main>
        <section id="about"><About lang={lang} /></section>
        <section id="geography"><Geography lang={lang} /></section>
        <section id="culture"><Culture lang={lang} /></section>
        <section id="landmarks"><Landmarks lang={lang} /></section>
        <section id="fastfacts"><FastFacts lang={lang} /></section>
        <section id="economy"><Economy lang={lang} /></section>
        <section id="languages"><Languages lang={lang} /></section>
        {/* <section id="news"><News apiKey={newsApiKey} lang={lang} /></section> */}
      </main>

      <footer>
        <small>
          🌍 Powered by <a href="https://restcountries.com" target="_blank" rel="noopener noreferrer">restcountries</a> &amp; <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer">NewsAPI</a> — Built with ❤️, open source & expandable 🚀
        </small>
      </footer>
    </div>
  );
};

export default App;
