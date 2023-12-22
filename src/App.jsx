import "./App.css";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Product" element={<Product />} />
        <Route exact path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
