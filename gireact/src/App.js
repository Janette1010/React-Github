import Info from './components/Info';
import { Component } from 'react'

let people = [
  {
    name: 'Janette',
    phonenumber: '704-555-5555',
    age: 24,
    email: 'janettealv6@gmail.com'
  },
  {
    name: 'Paul',
    phonenumber: '666-555-5555',
    age: 26,
    email: 'puallyd@gmail.com'
  },
  {
    name: 'Morgan',
    phonenumber: '555-666-5555',
    age: 22,
    email: 'morganad@yahoo.com'
  },
  {
    name: 'Jessie',
    phonenumber: '555-555-5555',
    age: 21,
    email: 'jessieware@gmail.com'
  },
  {
    name: 'Fiona',
    phonenumber: '333-555-3333',
    age: 38,
    email: 'fionaapple@gmail.com'
  }

]

function iteratePeople(arr) {
  return arr.map((person) => {
    return <Info person={person} />
  })
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {

      }
    }
  }
  render() {
    return (iteratePeople(people))
  }
}