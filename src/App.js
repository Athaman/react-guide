import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Keone', age: 30 },
      { name: 'Chris', age: 30 },
      { name: 'Will', age: 27}
    ],
    randomValue: 'some other state',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log('was clicked :)');
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Chris Williams', age: 30 },
        { name: 'Will Daddow', age: 27 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Keone', age: 30 },
        { name: event.target.value, age: 30 },
        { name: 'Will', age: 27 }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
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

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Keone Patrick Martin')}
            changed={this.nameChangedHandler} >My Hobbies: DND</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );

    // the above compiles to something like this
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'));
  }
}

export default App;
