import React, { Component } from 'react';
import './app.css';
import './list.css';
import './card.css';
import './store.js';
import List from './list.js';

class App extends Component {
  static defaultProps ={
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const  { store } = this.props
    return(
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
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