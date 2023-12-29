import {useState} from 'react';
// eslint-disable-next-line react/prop-types
function TextBoxContainer({ onTextChange}) {
    const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
    onTextChange(event.target.value);
  };

  return (
    <>
      <div>
        <input 
          className="block w-full p-2 text-gray-900 border border-gray-300 
          rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 
          light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white 
          light:focus:ring-blue-500 light:focus:border-blue-500"
          type="text" value={text} name="valInt" placeholder="enter text"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default TextBoxContainer;