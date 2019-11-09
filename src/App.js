import React, {useState, useEffect} from 'react';
import './App.css';

import List from './List';
import Form from './Form';
import FocusItem from './FocusItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo.items')) || []);
  const [focusItem, setFocusItem] = useState(null);

  useEffect(function storeItems() {
    localStorage.setItem('todo.items', JSON.stringify(items));
  });

  const onItemAdded = function(text) {
    const nextItemId = items.reduce((id, item) => Number(item.id) > id ? Number(item.id) : id, 0);
    setItems(items.concat([{ id: nextItemId + 1, text: text }]));
  };

  const onItemDone = function(itemId) {
    setItems(items.filter((item) => item.id !== itemId));
  };

  const onItemFocus = function(itemId) {
    setFocusItem(items.find(item => item.id === itemId));
  };

  const onItemBlur = function() {
    setFocusItem(null);
  };

  return (
    <div className="container todo-app">
      {!focusItem &&
        <div>
          <div className="row">
            <div className="column">
              <Form onItemAdded={onItemAdded}/>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <List items={items} onItemDone={onItemDone} onItemFocus={onItemFocus}/>
            </div>
          </div>
        </div>
      }
      {focusItem &&
        <div className="row">
          <div className="column">
            <FocusItem item={focusItem} onBlur={onItemBlur}/>
          </div>
        </div>
      }
    </div>
  );
}

export default App;