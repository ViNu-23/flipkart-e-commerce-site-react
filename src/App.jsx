import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import data from "./DataBase/Data";
import Login from "./Components/Login/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Product" element={<Product />} />
        <Route exact path="/Product-Info/:productId" element={<ProductInfo data={data}/>} />
        <Route exact path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
