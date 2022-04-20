import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./Data";

function App() {
  const [foodItems, setFoodItems] = useState(items);  // Initialize food items with data from Data.js
  const [categories, setCategories] = useState([]);


  return(
  <main>
    <section className="menu section">
      <div className="title">
        <h2>Today's menu</h2>
        <div className="underline"></div>
        <Categories></Categories>
        <Menu items={foodItems}></Menu>
      </div>
    </section>
  </main>);
}

export default App;
