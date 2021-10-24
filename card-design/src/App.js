import React from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      searchField: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ cards: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { cards, searchField } = this.state;
    const filteredCards = cards.filter(card =>
      card.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return ( 
      <div className="App">
        <h1 className='h1'>Card Design</h1>
        <SearchBox placeholder='search cards' handleChange={this.handleChange}/>
        <CardList cards={filteredCards} />
      </div>
    );
  }
}

export default App;
