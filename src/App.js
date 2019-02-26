import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: "Kate", age: "27"},
      {name: "Den", age: "28"},
      {name: "Max", age: "28"}
    ],
    showUsers: false
  };

  switchNameHandler = (newName) => {
    // console.log('Button clicked');
    this.setState({
      persons: [
        {name: "Ekaterina", age: "27"},
        {name: "Denis", age: "40"},
        {name: newName, age: "28"}
      ]}
    );
  };

  inputNameHandler = (event) => {
    this.setState({
      persons: [
        {name: "Kate", age: "27"},
        {name: "Den", age: "28"},
        {name: event.target.value, age: "28"}
      ]}
    );
  };

  hideButtonHandler = () => {
    const usersEnabled = this.state.showUsers;
    this.setState({showUsers: !usersEnabled});
  }

  deleteUserHandler = (userIndex) => {
    // const newPersons = this.state.persons.slice();
    const newPersons = [...this.state.persons];
    newPersons.splice(userIndex, 1);
    this.setState({persons: newPersons});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showUsers) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                    click={() => this.deleteUserHandler(index)}
                    name={person.name} 
                    age={person.age}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi! I'm a React App!</h1>
        <button onClick={this.hideButtonHandler} style={style}>Show Users</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi! I\'m a React App!'));
  }
}

export default App;
