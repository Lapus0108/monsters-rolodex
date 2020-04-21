import React, {Component} from 'react';
import {CardList} from "./Components/Card-list/Card-list.component";
import './App.css';
import {Searchbox} from "./Components/Search-box/Search-box.component";


class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    };
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users=>this.setState({monsters:users}))
}

handleChange = (e) => {
  this.setState({searchField: e.target.value})
};

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters= monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox
        placeholder='Search monsters'
        handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
