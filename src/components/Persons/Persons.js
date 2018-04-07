import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[persons.js] inside constructor', props);
  }

  compononentWillMount() {
    console.log('[persons.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[persons.js] inside componentDidMount' )
  }

  render () {
    console.log('[persons.js] inside render')
    return this.props.persons.map( (person, index ) => {
      return <Person
        key={person.id}
        click={() => this.props.clicked( index )}
        name={person.name}
        age={person.age}
        changed={( event ) => this.props.changed( event, person.id )} />
      });
  }
}

export default Persons;
