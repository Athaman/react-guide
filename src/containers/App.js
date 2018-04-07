import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[app.js] inside constructor', props);
    this.state = {
      persons: [
        { id: '1', name: 'Keone', age: 30 },
        { id: '3', name: 'Chris', age: 30 },
        { id: '2', name: 'Will', age: 27}
      ],
      randomValue: 'some other state',
      showPersons: false
    };
  }

  compononentWillMount() {
    console.log('[app.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[app.js] inside componentDidMount' )
  }

  componentWillReceiveProps(props) {
    console.log('[UPDATE App.js] component will receive props');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] inside componentDidUpdate');
  }


  // state like this would normally come from a database or external source
  // this is more modern than using declaration in constructor
  // state = {
  //   persons: [
  //     { id: '1', name: 'Keone', age: 30 },
  //     { id: '3', name: 'Chris', age: 30 },
  //     { id: '2', name: 'Will', age: 27}
  //   ],
  //   randomValue: 'some other state',
  //   showPersons: false
  // };

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
    console.log('[app.js] inside render')
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/> ;
    }

    return (
      <WithClass classes={classes.App}>
          <Cockpit
            title={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />
          {persons}
        </WithClass>
    );

    // the above compiles to something like this
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'));
  }
}

export default App;
