import React, { Component } from 'react';
import List from './list.js';
import STORE from './store.js';
import './app.css';

const newRandomCard = (listId) => {
  const id = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2,  4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends Component {
  state = {
    store: STORE
  }

  handleDeleteCard = (cardId) => {
    const {lists, allCards} = this.state.store;
    const newLists = lists.map(list=> ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));
    const newCards = omit(allCards, cardId);
    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  }

  handleAddCard =(listId)=> {
    const newCard = newRandomCard()
    const newLists = this.state.store.lists.map(list => {
      if(list.id === listId) {
        return{
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        }
      }
      return list;
    })
    this.setState({
      store: {
        lists:  newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  }
  
  render() {
    const  { store } = this.state
    return(
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onDeleteCard={this.handleDeleteCard}
              onClickAdd={this.handleAddCard}
            />
          ))}
        </div>
      </main>
    )
  }
}
// function App(props) {
//   const listsArray=props.store.lists;
//   const allCards=props.store.allCards;
//   const listComponents=listsArray.map(item => <List key={item.id} header={item.header} cards={item.cardIds.map(
//     item => allCards[item])}/>)

//   return (
//     <main className='App'>
//       <div className='App-header'>
//           <h1>Trelloyes!</h1>
//       </div>
//       <div className='App-list'>
//         {listComponents}
//       </div>
//     </main>
//   );
// }

export default App;