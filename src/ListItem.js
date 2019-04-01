import React from 'react';

export default function ListItem({id, text, onDone}){
  return (
    <li>
      <span>Quiero {text}</span>
      <button className="button button-clear button-icon" onClick={() => onDone(id)}>✓</button>
    </li>
  );
}