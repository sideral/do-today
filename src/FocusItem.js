import React from 'react';

export default function FocusItem({ item, onBlur }) {

  return (
    <div className="focus-item" onClick={onBlur}>
      <span>Quiero</span> {item.text}
    </div>
  );
}