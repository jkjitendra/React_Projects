// eslint-disable-next-line react/prop-types
function DisplayBoxContainer ({ text }) {
  return (
    <div
    className="w-full p-3 mt-1 ml-2 text-gray-900
          rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 
          light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white 
          light:focus:ring-blue-500 light:focus:border-blue-500"
    >{text}</div>
  )
}

export default DisplayBoxContainer;