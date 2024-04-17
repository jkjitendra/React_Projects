import { useState } from 'react';
import './App.css';

function App() {
  const [textInput, setTextInput] = useState('');
  const [maxCount, setMaxCount] = useState(100);

  const handleMaxCountChange = (e) => {
    setMaxCount(e.target.value);
  };

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <div className="main w-full h-screen flex justify-center items-center">
      <div className="textarea-container relative bg-[#5f68ae] p-4">
        <input
          type="number"
          className="absolute w-[4rem] top-0 right-0 mt-2 mr-2 bg-[#37AFBF] border-[#37AFBF] border-2 rounded-md"
          opacity="1"
          name="number"
          id="number"
          value={maxCount}
          onChange={handleMaxCountChange}
        />
        <div className="w-full h-full flex flex-col items-end">
          <textarea
            className="w-[55rem] h-96 mt-10"
            name="postContent"
            value={textInput}
            maxLength={maxCount}
            onChange={handleTextChange}
          />
          <span>Characters {maxCount} Left</span>
        </div>
      </div>
    </div>
  );
}

export default App;
