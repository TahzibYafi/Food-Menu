import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './Data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {


  return (
<div>
  Food Menu
</div>
  );
}

export default App;
