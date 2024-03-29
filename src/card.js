import React from 'react';
import './card.css';


function Card(props) {
    return (
    <div className='Card'>
        <button type='button' onClick={() => props.onDeleteCard(props.id)}>delete</button>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
    </div>
    )
}

Card.propTypes ={
    onDeleteCard: () => {}
}

export default Card;