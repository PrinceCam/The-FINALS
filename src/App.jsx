import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./Componets/Card";
import NavBar from "./Componets/NavBar"



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Cart />
      <Card />
      <Routes>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
