const Filter = ({ value, filterHandler }) => {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        value={value}
        onChange={filterHandler}
        placeholder="Search name..."
        className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
    </div>
  )
}

export default Filter