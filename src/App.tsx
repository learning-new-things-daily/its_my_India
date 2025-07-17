import React from "react";
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

const App: React.FC = () => {
  const newsApiKey = ""; // Add your NewsAPI key if needed

  return (
    <div className="container">
      <header>
        <h1>It's My India 🇮🇳</h1>
        <nav>
          {NAV_ITEMS.map(item => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
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