import { useState, useEffect } from 'react'
import personService from './services/person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [filteredPerson, setFilteredPerson] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(personData => {
        setPersons(personData)
      })
  },[])

  const deletePerson = (id) => {
    const [person] = persons.filter(person => person.id === id)
    const answer = window.confirm(`Delete ${person.name} ?`)
    if(answer){
      personService
        .deleteOne(id)
        .then(responseData => {
          setPersons(persons.filter(person => person.id !== responseData.id))
          setFilteredPerson(filteredPerson.filter(person => person.id !== responseData.id))
        })
    }
  }

  const handleFilterNameChange = (e) => {

    setFilterName(e.target.value)
    const filteredPerson = persons.filter(person => {
      if(person.name.toLowerCase().includes(e.target.value)){
        return true
      }else{
        return false
      }
      })
    setFilteredPerson(filteredPerson)
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    let flag = 0

    persons.map(person => {
      if(person.name === newName){

        window.confirm(`${newName} is already added to phone book, replace the old number with a new one?`)
        personService
          .update(person.id, {name: newName, number: newNumber})
          .then(personData => {
            setPersons(persons.map(person => person.name === newName ? personData : person))
            setNewNumber('')
            setNewName('')
          })

        flag = 1
      }
    })

    if(flag === 0){
      const newPerson = {name: newName, number: newNumber}

      personService
        .create(newPerson)
        .then(personData => {
          setPersons(persons.concat(personData))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilterNameChange={(e) => handleFilterNameChange(e)}/>
      <h2>Add a new person</h2>
      <PersonForm newName={newName} newNumber={newNumber} addPerson={(e) => addPerson(e)} handleNameChange={(e) => handleNameChange(e)} handleNumberChange={(e) => handleNumberChange(e)}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filterName={filterName} filteredPerson={filteredPerson} deletePerson={(id) => deletePerson(id)}/>
    </div>
  )
}

export default App
