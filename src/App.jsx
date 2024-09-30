import { appsData, productsData } from "./data.js";
import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/Products/index.jsx";
import ViewProductPage from "./pages/Products/ViewProductPage.jsx";


function App() {
  const [products] = useState(productsData)
  const [apps] = useState(appsData)

  console.log({ products, apps })

  return (
    <div className="App">
      <header>
        <h1>Apple Shop</h1>
        <nav>
          <ul>
            <li>Home</li>
            <Link to="/products">Products</Link>
            <li>Apps</li>
            
          </ul>
        </nav>
      </header>

        <Routes>
        <Route
          path="/products"
          element={<ProductsPage products={products} />}
        />

        <Route
            path="/products/:id"
            element={<ViewProductPage products={products} />} 
          />
        </Routes>;

    </div>
  );
}

export default App;

