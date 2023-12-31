import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

import TemplateNavbar from "./Template/templateNavbar"
import TemplateHeader from "./Template/templateHeader"
import TemplateContent from "./Template/templateContent"
import TemplateFooter from "./Template/templateFooter"

import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import State from "./Pages/State";
import State2 from "./Pages/State2";
import ProductDetail from "./Pages/ProductDetail";
import AxiosProducts from "./Pages/AxiosProducts";
import AxiosProductDetail from "./Pages/AxiosProductDetail";
import AxiosUsers from "./Pages/AxiosUsers";
import DataGridSample from "./Pages/DataGridSample";

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
        <li><Link to="/State" style={{textDecoration: "none", textTransform: "uppercase", color: "#000"}}>State</Link></li>
        <li><Link to="/State2" style={{textDecoration: "none", textTransform: "uppercase", color: "#000"}}>State2</Link></li>
        <li><Link to="/AxiosProducts" style={{textDecoration: "none", textTransform: "uppercase", color: "#000"}}>AxiosProducts</Link></li>
        <li><Link to="/AxiosUsers" style={{textDecoration: "none", textTransform: "uppercase", color: "#000"}}>AxiosUsers</Link></li>
        <li><Link to="/DataGridSample" style={{textDecoration: "none", textTransform: "uppercase", color: "#000"}}>DataGridSample</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Products" element={<Products></Products>}></Route>
        <Route path="/Products/:id" element={<ProductDetail />}></Route>
        <Route path="/State" element={<State></State>}></Route>
        <Route path="/State2" element={<State2></State2>}></Route>
        <Route path="/AxiosProducts" element={<AxiosProducts></AxiosProducts>}></Route>
        <Route path="/AxiosProducts/:id" element={<AxiosProductDetail />}></Route>
        <Route path="/AxiosUsers" element={<AxiosUsers></AxiosUsers>}></Route>
        <Route path="/DataGridSample" element={<DataGridSample />}></Route>
      </Routes>
    </div>
  );
}

export default App;
