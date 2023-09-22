import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import menu from "./data";

function App() {
  const [result, setResult] = useState(menu);

  const filterItems = (category) => {
    if (category === "all") {
      setResult(menu);
    } else {
      const newItems = menu.filter((item) => item.category === category);
      setResult(newItems);
    }
  };

  return (
    <div className="section">
      <h1 className="title">our menu</h1>
      <Categories filterItems={filterItems} items={menu} />
      <Menu items={result} />
    </div>
  );
}

export default App;
