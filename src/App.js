import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Import Components
import Dashboard from "./pages/Dashboard";
import Store from "./pages/Store";
import SingleStore from "./pages/SingleStore";
import Profile from "./pages/Profile";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
//Import General styles
import "./assets/styles/App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/store' element={<Store />} />
        <Route path='/store/single-store' element={<SingleStore />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/products/single-product' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
