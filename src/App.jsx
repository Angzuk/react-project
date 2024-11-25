import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyringht {year}</p>
    </header>
  );
}

const items = [
  "Macarioni and Cheese",
  "Salmon with Potatos",
  "Tofu with Vegetables",
];

function Main({ dishes }) {
  return (
    <ul>
      {dishes.map((dish) => (
        <li style={{ listStyleType:"None" }}>{dish}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={items} />
    </div>
  );
}

export default App;
