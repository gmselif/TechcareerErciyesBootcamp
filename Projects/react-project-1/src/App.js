import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

import TemplateNavbar from "./Template/templateNavbar"
import TemplateHeader from "./Template/templateHeader"
import TemplateContent from "./Template/templateContent"
import TemplateFooter from "./Template/templateFooter"

import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Suppliers from "./Pages/Suppliers";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  return (
    <div className="App">
      {/*<TemplateNavbar />
      <TemplateHeader />
      <TemplateContent />
      <TemplateFooter />*/}

      <ul style={{display: "flex", flexDirection: "row", columnGap: "20px", listStyleType: "none"}}>
        <li><Link to="/" style={{textDecoration: "none", textTransform: "uppercase", color: "#000"}}>Home</Link></li>
        <li><Link to="/Products" style={{textDecoration: "none", textTransform: "uppercase", color: "#000"}}>Products</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Products" element={<Products></Products>}></Route>
        <Route path="/Products/:id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
