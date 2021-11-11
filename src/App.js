// test comment in app
import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super() // calls constructor on Component
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({monsters: users}))
  }

  render() {
    
    // the same as saying monsters = this.state.monsters and searchField = this.state.searchField
    const { monsters, searchField} = this.state
    
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    const handleChange = e => this.setState({searchField: e.target.value})

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monsters!'
          handleChange={handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
