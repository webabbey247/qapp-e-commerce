import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Import Components
import HomePage from "./pages/HomePage";
// import PrivateRoute from "./Routes/PrivateRoutes";
// import Store from "./pages/Store";
// import SingleStore from "./pages/SingleStore";
// import Profile from "./pages/Profile";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
//Import General styles
import "./assets/styles/App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/store' element={<Store />} /> */}
        {/* <Route path='/store/single-store' element={<SingleStore />} /> */}
        {/* <Route path='/profile' element={<Profile />} /> */}
        <Route path='/products/single-product' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
