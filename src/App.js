import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: "Kate", age: "27"},
      {name: "Den", age: "28"},
      {name: "Max", age: "28"}
    ]
  };

  switchNameHandler = () => {
    // console.log('Button clicked');
    this.setState({
      persons: [
        {name: "Ekaterina", age: "27"},
        {name: "Denis", age: "40"},
        {name: "Max", age: "28"}
      ]}
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a React App!</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My hobby is: beer!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi! I\'m a React App!'));
  }
}

export default App;
