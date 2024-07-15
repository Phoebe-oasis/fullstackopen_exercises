import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
      setPersons(persons.concat({name: newName, number: newNumber, id: persons.length + 1}))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phone Book</h2>
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
      <h2>Numbers</h2>
      <div>
        {persons.map(person => 
          <p key={person.id}>{person.name} {person.number}</p>
        )}
      </div>
    </div>
  )
}

export default App
