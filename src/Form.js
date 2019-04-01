import React, {useState} from 'react';

export default function Form({ onItemAdded }) {
  const [currentItem, setItem] = useState('');

  const handleSubmit = function(event) {
    event.preventDefault();
    if (currentItem.trim() === '') {
      return;
    }
    const item = currentItem.trim();
    onItemAdded(item[0].toLowerCase() + item.slice(1));
    setItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="entry"
        type="text"
        value={currentItem}
        placeholder="¿Qué quieres hacer hoy?"
        onChange={(e) => setItem(e.target.value)}
      />
    </form>
  );
}