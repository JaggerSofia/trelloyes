import React from 'react';
import './app.css';
import './list.css';
import './card.css';
import './store.js';
import List from './list.js';


function App(props) {
  const listsArray=props.store.lists;
  const allCards=props.store.allCards;
  const listComponents=listsArray.map(item => <List key={item.id} header={item.header} cards={item.cardIds.map(
    item => allCards[item])}/>)

  return (
    <main className='App'>
      <div className='App-header'>
          <h1>Trelloyes!</h1>
      </div>
      <div className='App-list'>
        {listComponents}
      </div>
    </main>
  );
}

export default App;