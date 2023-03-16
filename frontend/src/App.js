import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin/index";
import Signup from "./pages/Auth/Signup/index";
import Products from "./pages/Products/index";
import ProductDetail from "./pages/ProductDetail/index";
import Basket from "./pages/Basket/index";
import Error404 from "./pages/Error404/index";
import ProductedProfile from "./pages/ProductedRoute/ProductedProfile";
import ProductedAdmin from "./pages/ProductedRoute/ProductedAdmin";

function App() {
  return (
    <>
      <Navbar />
      <div id="content">
        <Routes>
          <Route path="/" exect index element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/profile" element={<ProductedProfile />} />
          <Route path="/admin" element={<ProductedAdmin />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
