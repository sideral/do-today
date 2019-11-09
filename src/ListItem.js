import React from 'react';

export default function ListItem({ id, text, onDone, onFocus }) {

  return (
    <li>
      <span onClick={() => onFocus(id)}>Quiero {text}</span>
      <button className="button button-clear button-icon" onClick={() => onDone(id)}>✓</button>
    </li>
  );
}