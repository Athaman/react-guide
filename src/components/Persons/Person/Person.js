import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[person.js] inside constructor', props);
  }

  compononentWillMount() {
    console.log('[person.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[person.js] inside componentDidMount' )
  }

  render () {
    console.log('[person.js] inside render')
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} defaultValue={this.props.name}/>
      </div>
    )
  }
};

export default Person;
