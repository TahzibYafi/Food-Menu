import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./Data";

const allCategories = ['all', ...new Set(items.map((item)=>item.category))]; // Grab all unique categories

function App() {
  const [foodItems, setFoodItems] = useState(items);  // Initialize food items with data from Data.js
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) =>{
    if (category==='all'){
      setFoodItems(items);
      return;
    }
    const newItems = items.filter((item)=>item.category===category);  // Filter food items based on the category 
    setFoodItems(newItems);
  }
  return(
    // Display the food items and their information
  <main>
    <section className="menu section">
      <div className="title">
        <h2>Today's menu</h2>
        <div className="underline"></div>
        <Categories categories={categories} filteritems={filterItems}></Categories>
        <Menu items={foodItems}></Menu>
      </div>
    </section>
  </main>);
}

export default App;
