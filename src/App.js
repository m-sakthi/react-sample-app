import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Sakthi', age: 26 },
      { id: '3', name: 'Ram', age: 27 }
    ],
    showPersons: true
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { id: '1', name: newName, age: 29 },
        { id: '2', name: 'Sakthi', age: 26 },
        { id: '3', name: 'Ram', age: 27 }
      ]
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    console.log(personIndex);

    const person = { ...this.state.persons[personIndex] };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    console.log(person);

    this.setState({ persons: persons });
    console.log(this.state.persons);
  }

  deletePersonHandler = (i) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(i, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: '#ddd',
      border: '1px solid #888',
      padding: '8px'
    }


    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)} 
                changed={(event) => this.nameChangedHandler(event, person.id) } />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm React app</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Click to React
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
