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
    console.log('[persons.js] inside componentDidMount' );
  }

  componentWillReceiveProps(props) {
    console.log('[UPDATE Persons.js] component will receive props');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] inside componentDidUpdate');
  }

  render () {
    console.log('[persons.js] inside render')
    return this.props.persons.map( (person, index ) => {
      return <Person
        key={person.id}
        click={() => this.props.clicked( index )}
        position={index}
        name={person.name}
        age={person.age}
        changed={( event ) => this.props.changed( event, person.id )} />
      });
  }
}

export default Persons;
