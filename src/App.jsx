import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { ProductProvider } from "./context/ProductContext";
//import Navbar from "./componets/Navbar"
import ProductList from "./Componets/ProductList";
import ProductDetails from "./componets/ProductDetails"
import Cart from "./Componets/Crat";

function App() {
  return (
    
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route element={<ProductList />} path="/" />
          <Route element={<ProductDetails />} path="/product-details" />
          <Route element={<Cart />} path="/cart" />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;