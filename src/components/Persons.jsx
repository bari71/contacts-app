import Person from './Person'

const Persons = ({ matchedPersons }) => {
  if (!matchedPersons || matchedPersons.length === 0) {
    return (
      <p className="mt-4 text-gray-600 italic text-center">No matches found for the name.</p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {matchedPersons.map(person => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  )
}

export default Persons