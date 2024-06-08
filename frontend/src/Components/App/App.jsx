import "./App.css";
import React from "react";
import { ProductMng } from "../ProductMng/ProductMng";
import { Routes, Route,Link } from "react-router-dom";
import { ProductList } from "../ProductList/ProductList";
import { ProductFind } from "../ProductFind/ProductFind";
import { ProductEdit } from "../ProductEdit/ProductEdit";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/product/creation">Product Creation</Link>
          </li>
          <li>
            <Link to="/product/list">Product List</Link>
          </li>
          <li>
            <Link to="/product/find/">Product Find</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/product/creation" element={<ProductMng />} />
        <Route path="/product/list/" element={<ProductList />} />
        <Route path="/product/find/:id?" element={<ProductFind />} />
        <Route path="/product/?:id" element={<ProductEdit />} />
      </Routes>
    </div>
  );
}

export default App;
