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
        </div>
    </section>)
}

export default List