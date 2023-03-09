import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin/index";
import Signup from "./pages/Auth/Signup/index";
import Products from "./pages/Products/index";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div id="content">
        <Routes>
          <Route path="/" exect element={<Products />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
