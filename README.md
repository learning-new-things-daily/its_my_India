# 🇮🇳 It's My India

A modular, responsive React + TypeScript web app that highlights India's geography, culture, economy, languages, and current news.

## 🛠️ Tech Stack

- **React** (with TypeScript)
- **React Router**
- **CSS Modules**
- **Jest** (optional: for testing)
- **GitHub Actions** (CI/CD to GitHub Pages)
- **Public APIs** (for real-time data)

---

## 🚀 Live Demo

🌐 [Visit Site](https://mukulmj.github.io/its_my_India/)

---

## 📦 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/mukulmj/its_my_India.git
cd its_my_India
npm install
```

Run the development server:

```bash
npm start
```

Open `http://localhost:3000` in your browser to see the app.

---

## 🧪 Available Scripts

* `npm start` — Start development server
* `npm run build` — Build for production
* `npm test` — Run test suite
* `npm run lint` — Lint your code
* `npm run tsc` — Type check only
* `npm run deploy` — Deploy to GitHub Pages

---

## 🗺️ Features

* 🧩 **Modular Components**:
  `src/components/` includes:

  * About
  * Geography
  * Culture
  * Landmarks
  * Fast Facts
  * News
  * Languages
  * Economy

* 🔁 **Live API Data**: Fetches real-time info from public APIs (e.g., news or country info)

* 📱 **Responsive Design**: Fully mobile-friendly and accessible UI

---

## 🚚 Deployment

To deploy manually:

```bash
npm install --save gh-pages
npm run build
npm run deploy
```

To enable automated deployment:

* GitHub Actions deploys to `gh-pages` on push to `master` using the workflow in `.github/workflows/deploy.yml`

---

## 📁 Project Structure

```
its_my_India/
├── public/
│   └── index.html
├── src/
│   ├── index.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Culture.tsx
│   │   ├── Economy.tsx
│   │   ├── FastFacts.tsx
│   │   ├── Geography.tsx
│   │   ├── Landmarks.tsx
│   │   ├── Languages.tsx
│   │   ├── News.tsx
│   │   └── Section.tsx
├── package.json
├── tsconfig.json
├── README.md
```

---

## 📄 License

MIT © 2025 \[Mukul Joshi]

```

---

Let me know if:
- You want badges (build status, license, version, etc.)
- You want it rewritten in minimal/compact format
- You want the README to include screenshots or usage GIFs
