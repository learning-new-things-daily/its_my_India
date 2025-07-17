import React from "react";
import "./App.css";
import About from "./components/About";
import Geography from "./components/Geography";
import Culture from "./components/Culture";
import Landmarks from "./components/Landmarks";
import FastFacts from "./components/FastFacts";
import News from "./components/News";

const App: React.FC = () => {
  // Optionally, add your NewsAPI key here
  const newsApiKey = ""; // e.g. "YOUR_NEWSAPI_KEY"
  return (
    <div className="container">
      <header>
        <h1>It's My India 🇮🇳</h1>
      </header>
      <main>
        <About />
        <Geography />
        <Culture />
        <Landmarks />
        <FastFacts />
        <News apiKey={newsApiKey} />
      </main>
      <footer>
        <small>Data from restcountries.com &amp; newsapi.org</small>
      </footer>
    </div>
  );
};

export default App;