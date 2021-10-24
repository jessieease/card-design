import React from 'react';
import Card from '../Card';
import './CardList.css';

const CardList = (props) => (
  <div className='card-list'>          
    {props.cards.map(card => (
      <Card key={card.id} card={card}/>
    ))}
  </div>
);

export default CardList;
