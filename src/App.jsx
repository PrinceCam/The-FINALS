import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import Navbar from "./componets/Navbar"
import ProductList from "./Componets/ProductList";
import ProductDetails from "./componets/ProductDetails"
import Cart from "./componets/Cart";


function App() {
  return (
    
      <BrowserRouter>
      <ProductProvider>
         <Navbar />
        <Routes>
          <Route element={<ProductList />} path="/" />
          <Route element={<ProductDetails />} path="/product-details" />
          <Route element={<Cart />} path="/cart" />
        </Routes>
        </ProductProvider>
      </BrowserRouter>
    
  );
}

export default App;