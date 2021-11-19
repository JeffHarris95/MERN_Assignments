import './App.css';
import React, { useState } from 'react';
import Todo from "./components/Todo"

function App() {

  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);

  const todoItem = {
    title : newItem,
    complete : false
  }

  const handleNewItem = (e) => {
    e.preventDefault();
    setList([...list, todoItem]);
    setNewItem("");
  }

  const handleItemDelete = (deleteIndex) => {
    const filterItems = list.filter((item, i) => {
      return i !== deleteIndex;
    });

    setList(filterItems);
  }

  const handleComplete = (index) => {
    const updateList = list.map((item, i) => {
      if (index === i) {
        item.complete = !item.complete;
      }
      return item;
    })

    setList(updateList);
  }

  return (
    <div className="App">
      <form onSubmit={ (e) => handleNewItem(e) }>
        <div>
          <label>New Item: </label> 
            <input type="text" value={newItem} onChange={(e) => {setNewItem(e.target.value)} } />
        </div>
        <input type="submit" value="Add" />
      </form>

      {list.map((item, i) => {
        return <Todo item={item} handleComplete={handleComplete} i={i} handleItemDelete={handleItemDelete}/>;
      })}
    </div>
  );
}

export default App;