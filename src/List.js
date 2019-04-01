import React from 'react';
import ListItem from './ListItem';

export default function List({items, onItemDone}){
  const listItems = items.map((item) => {
    return <ListItem key={item.id} id={item.id} text={item.text} onDone={onItemDone}/>;
  });
  return <ul>{listItems}</ul>;
}