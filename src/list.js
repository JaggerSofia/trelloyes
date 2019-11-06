import React from 'react';
import Card from './card.js'

function List(props) {
    console.log()
    const cardsArray=props.cards;
    const cardsComponents=cardsArray.map(card => <Card key={card.id} title={card.title} content={card.content}/>)
    return (
    <section className='List'>
        <header className='List-header'>
            <h2>{props.header}</h2>
        </header>
        <div className='List-cards'>
        {cardsComponents} 
        <button type='button' className='List-add-button'>
            + Add Random Card
        </button>
        </div>
    </section>)
}

export default List