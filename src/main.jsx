import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const [firstAnimal, second , third] = ["giraffe","zebra","bear"]; // can be also represented: [, , third]
console.log(second);

createRoot(document.getElementById('root')).render(<App />);
