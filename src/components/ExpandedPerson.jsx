import PersonAddress from './PersonAddress'
import PersonCompany from './PersonCompany'

const ExpandedPerson = ({ person }) => {
    return (
      <div className="mt-3 p-4 bg-gray-50 rounded space-y-4 border border-gray-200">
        <div className="space-y-1">
          <p><span className="font-medium">Email:</span> {person.email}</p>
          <p><span className="font-medium">Website:</span> {person.website}</p>
        </div>
        <PersonAddress person={person}/>
        <PersonCompany person={person}/>
      </div>
    )
}

export default ExpandedPerson