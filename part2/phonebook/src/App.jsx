import { useState, useEffect } from 'react'
import personService from './services/person'

const Person = ({person, deletePerson}) => {
  return <p>{person.name} {person.number} <button onClick={deletePerson}>delete</button></p>
}

const Persons = ({persons, filterName, filteredPerson, deletePerson}) => {
  if(filterName){
    return(
      <div>
        {filteredPerson.map(person => 
          <Person person={person} key={person.id} deletePerson={()=>deletePerson(person.id)}/>
        )}
      </div>
      )
  }else{
    return(
      <div>
        {persons.map(person => 
          <Person person={person} key={person.id} deletePerson={() => deletePerson(person.id)}/>
        )}
      </div>
      )
  }

}

const PersonForm = ({addPerson, newName, newNumber, handleNameChange, handleNumberChange}) => {
  
  return (
    <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
          number: <input 
          value={newNumber}
          onChange={handleNumberChange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
  )
}

const Filter = ({filterName, handleFilterNameChange}) => {
  return (
    <div>
      filter shown with name: <input 
        value={filterName}
        onChange={handleFilterNameChange}
        />
    </div>
  )
}

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
        alert(`${newName} is already added to phone book`)
        setNewName('')
        flag = 1
      }
    })

    if(flag === 0){
      const newPerson = {name: newName, number: newNumber}
      personService
        .update(newPerson)
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
