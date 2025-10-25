import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchPersons = async () => {
      const response = await personService.getPersons()
      setPersons(response.data)
    }

    fetchPersons()
  }, [])

  const matchedPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const filterHandler = (event) => setFilter(event.target.value)

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6">
          Contacts
        </h2>
        <Filter value={filter} filterHandler={filterHandler} />
        <Persons matchedPersons={matchedPersons} />
      </div>
    </div>
  )
}

export default App