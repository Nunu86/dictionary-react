import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Dictionary />
      </main>
      <footer>
        <small>
          <strong>
            This project was coded by Chinonye Okorie. It's open-sourced on{" "}
            <a href="/">GitHub</a>and hosted on <a href="/">Netlify</a>
          </strong>
        </small>
      </footer>
    </div>
  );
}

export default App;
