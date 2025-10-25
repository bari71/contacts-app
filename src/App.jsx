import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getPersons()
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
  }, [])

  const matchedPersons = persons.filter(function(person) {
    return person.name.toLowerCase().includes(filter.toLowerCase())
  })

  const handleFilter = (event) => setFilter(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} eventHandler={handleFilter}/>
      <h2>Numbers</h2>
      <Persons matchedPersons={matchedPersons} allPersons={persons} setAllPersons={setPersons}/>
    </div>
  )
}

export default App