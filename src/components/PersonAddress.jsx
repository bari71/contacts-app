const PersonAddress = ({ person }) => {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-gray-800 border-b border-gray-400 pb-1 text-blue-600">
        Address
      </h4>
      <div className="ml-4 space-y-1 text-gray-800">
        <p><span className="font-medium">Street:</span> {person.address.street}</p>
        <p><span className="font-medium">Suite:</span> {person.address.suite}</p>
        <p><span className="font-medium">City:</span> {person.address.city}</p>
        <p><span className="font-medium">Zip Code:</span> {person.address.zipcode}</p>
      </div>
    </div>
  )
}

export default PersonAddress