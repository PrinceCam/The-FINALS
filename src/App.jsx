import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext"; 
import { CartProvider } from "./context/CartContext"; 
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider> 
          <Navbar />
          <Routes>
            <Route element={<ProductList />} path="/" />
            <Route element={<ProductDetails />} path="/product-details" />
            <Route element={<Cart />} path="/cart" />
          </Routes>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
