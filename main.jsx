import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App/App";
import './main.css';
import 'animate.css'
import '../node_modules/flowbite/dist/flowbite'

createRoot(document.getElementById("root")).render(
  <StrictMode >
    <App />
  </StrictMode>
);
