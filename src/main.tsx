import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.tsx'
import Cards from "./components/Cards";
import Forms from "./components/Forms";
import Positions from "./components/Positions";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Cards /> */}
    {/* <Forms /> */}
    <Positions />
  </StrictMode>,
);
