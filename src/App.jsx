import { Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./Componets/Card";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Cart />
      <Card />
      <Routes>
        <Route element={} path=""/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
