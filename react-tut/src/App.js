import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Learn React"
    },
    {
      id: 2,
      checked: false,
      item: "Learn JavaScript"
    },
    {
      id: 3,
      checked: false,
      item: "Learn CSS"
    }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header title={"To Do List"} />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
      length={items.length}
      />
    </div>
  );
}

export default App;
