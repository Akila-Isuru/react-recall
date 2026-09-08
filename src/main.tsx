import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.tsx'
import Cards from "./components/Cards";
import Forms from "./components/Forms";
// import Positions from "./components/Positions";
import Text_and_Colors from "./components/Text_and_Colors";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Cards /> */}
    {/* <Forms /> */}
    {/* <Positions /> */}
    <Text_and_Colors />
  </StrictMode>,
);
