import "./App.css";
import chef from "./images/chef.jpg";

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
  "Classic Carbonara",
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes }) {
  return (
    <main>
      <img 
        src={chef} 
        height={300} 
        alt="Photo of the chef owner" />
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id} style={{ listStyleType: "None" }}>
            {dish.title}
          </li>
        ))}
      </ul>
    </main>
  );
}

function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
