import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  // state like this would normally come from a database or external source
  state = {
    persons: [
      { id: '1', name: 'Keone', age: 30 },
      { id: '3', name: 'Chris', age: 30 },
      { id: '2', name: 'Will', age: 27}
    ],
    randomValue: 'some other state',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    // using the spread operator creates a new object rather than a reference
    // to the original person object being held in state
    const person = {
      ...this.state.persons[personIndex]
    };

    // alternitively use
    // const person = Object.assign( {}, this.state.persons[personIndex]);

    person.name = event.target.value;

    // again use spread to retrieve new array
    const persons = [ ...this.state.persons ];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex  ) => {
    // using the spread operator or the slice method returns a new array rather
    // than using a reference to the original array held in state
    //  const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/> ;
    }

    return (
      <div className={classes.App}>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
          {persons}
        </div>
    );

    // the above compiles to something like this
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'));
  }
}

export default App;
