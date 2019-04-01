import React, {useState, useEffect} from 'react';
import './App.css';

import List from './List';
import Form from './Form';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo.items')) || []);
  const [nextItemId, setNextItemId] = useState(0);

  useEffect(function storeItems() {
    localStorage.setItem('todo.items', JSON.stringify(items));
    let next = items.reduce((id, item) => Number(item.id) > id? Number(item.id) : id, 0);
    setNextItemId(next);
  }, [items]);

  const onItemAdded = function(text){
    setItems(items.concat([{id: nextItemId + 1, text: text}]));
    setNextItemId(nextItemId + 1);
  };

  const onItemDone = function(itemId){
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <div className="container todo-app">
      <div className="row">
        <div className="column">
          <Form onItemAdded={onItemAdded}/>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <List items={items} onItemDone={onItemDone}/>
        </div>
      </div>
    </div>
  );
}

export default App;