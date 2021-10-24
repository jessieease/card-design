import React from 'react';
import './Card.css';

const Card = (props) => (
  <div className='card-container'>
    <img
    alt="cards"
    src={`https://robohash.org/${props.card.id}?set=set4`}
    width="180" 
    height="180"
    />
    <div> {props.card.name} </div>
    <div> {props.card.email} </div>
  </div>
);

export default Card;
