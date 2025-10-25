import { useState } from "react"
import ExpandedPerson from "./ExpandedPerson"

const Person = ({ person }) => {
  const [expanded, setExpanded] = useState(false)
  const toggleExpand = () => setExpanded(!expanded)

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
    >
      <h3 className="text-lg font-bold text-blue-600">{person.username}</h3>
      <p className="text-gray-700"><span className="font-semibold">Name:</span> {person.name}</p>
      <p className="text-gray-700"><span className="font-semibold">Phone:</span> {person.phone}</p>

      <button
        onClick={toggleExpand}
        className="mt-2 px-3 py-1.5 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        {expanded ? "Hide Details" : "View Details"}
      </button>
      {expanded && (
        <ExpandedPerson person={person} />
      )}
    </div>
  )
}

export default Person