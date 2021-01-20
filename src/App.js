import React, {Component} from 'react'
import './App.css';
import Person from './Person/person'

class App extends Component {

  state = {
    persons: [
      {name: 'John', number: '1', dob: 'July 14th 1998'},
      {name: 'Keith', number: '2', dob: 'September 15, 1997'},
      {name: 'Quentin', number:'3', dob: 'November 28th, 1994'},
      {name:'Darryl', number:'4', dob:'March 31st, 1990'}
    ]
  }

  render(){
    return(
      <div>
        {
          this.state.persons.map(person =>{
            return <Person name ={person.name} number = {person.number} dob ={person.dob}/>
          })
        }
      </div>

    );
  }
}

export default App;