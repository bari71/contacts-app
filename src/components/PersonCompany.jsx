const PersonCompany = ({ person }) => {
  return (
    <div className="space-y-1">
      <h4 className="font-semibold text-gray-800 border-b border-gray-400 pb-1 text-blue-600">
        Company
      </h4>
      <div className="ml-4 text-gray-700 space-y-1">
        <p className="text-gray-900 font-medium">{person.company.name} ~ <span className="italic text-gray-600">{person.company.bs}</span></p>
        <p className="text-gray-600">{person.company.catchPhrase}</p>
      </div>
    </div>
  )
}

export default PersonCompany