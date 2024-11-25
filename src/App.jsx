import "./App.css";

let language = "React";
// to open emoji keyboard select "Window" button + period
let moon = "🌙";

function App() {
  return (
    <h1>
      Hello {language.toUpperCase()} {moon} World!
    </h1>
  );
}

export default App;
