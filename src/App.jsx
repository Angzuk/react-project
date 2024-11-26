import { useState, useReducer } from "react";
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

function Main({ dishes, openStatus, onStaus }) {
  return (
    <>
      <div>
        <button onClick={() => onStaus(true)}>I want to be open</button>
        <h2>Welcome to this beautiful restaurant! {openStatus ? "Open" : "Close"} </h2>
      </div>
      <main>
        <img src={chef} height={300} alt="Photo of the chef owner" />
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "None" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  // const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer((status) => !status);

  return (
    <div>
      <h1>
        The restaurant is currently {status ? "Open" : "Close"}.
      </h1>
      <button onClick={toggle}>
        {status ? "Close" : "Open"} Restaurant
      </button>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main 
        dishes={dishObjects} 
        openStatus={status} 
        onStaus={toggle}/>
    </div>
  );
}

export default App;
