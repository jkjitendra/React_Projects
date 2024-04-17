import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [textInput, setTextInput] = useState('');
  const [maxCount, setMaxCount] = useState(10);
  const textAreaRef = useRef(null);
  const inputRef = useRef(null);

  const handleMaxCountChange = (e) => {
    const value = e.target.value;
    let newMaxCount = parseInt(value, 100);
    // setMaxCount(newMaxCount);
    setMaxCount(value === '' ? (textInput.length) : newMaxCount);

    // If the input is not a number, it's likely empty
    if (isNaN(newMaxCount)) {
      setMaxCount('');
    } else {
      // Enforce the limits of 0 and 10,000
      newMaxCount = Math.max(0, Math.min(newMaxCount, 10000));
      setMaxCount(newMaxCount);
    }

    if (newMaxCount === '' && inputRef.current) {
      // When the input is cleared, keep the focus on the input field
        inputRef.current.focus();
    }
  };

  const handleTextChange = (e) => {
    setTextInput(e.target.innerText);
    moveCaretToEnd(); // Ensure caret moves to the end after text update
  };

  useEffect(() => {
    if (textAreaRef.current) {
      const caretPosition = textInput.length; // Always end of the text
      if (textInput.length > maxCount) {
        const partOne = textInput.slice(0, maxCount);
        const partTwo = textInput.slice(maxCount);
        textAreaRef.current.innerHTML = `${partOne}<span class="text-[#921212]">${partTwo}</span>`;
        setCaretPosition(textAreaRef.current, caretPosition);
      } else {
        textAreaRef.current.textContent = textInput; // Directly set textContent for normal text
      }
    }
  }, [textInput, maxCount]);

  function setCaretPosition(ctrl) {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(ctrl);
    range.collapse(false); // False means move to the end
    sel.removeAllRanges();
    sel.addRange(range);
  }

  function moveCaretToEnd() {
    setTimeout(() => {
      if (textAreaRef.current && document.activeElement === textAreaRef.current) {
        setCaretPosition(textAreaRef.current, textInput.length);
      }
    }, 0); // Timeout ensures the DOM has updated
  }
  
  const getRemainingCountClass = () => {
    return textInput.length - maxCount > 0 ? 'text-[#b7c3ec]' : '';
  };

  return (
    <div className="main w-full h-screen flex justify-center items-center">
      <div className="textarea-container relative bg-[#5f68ae] p-4">
        <input
          type="number"
          ref={inputRef}
          className="absolute w-[4rem] top-0 right-0 mt-2 mr-2 bg-[#37AFBF] border-[#37AFBF] border-2 rounded-md"
          name="number"
          id="number"
          value={maxCount.toString()}
          min="0"
          max="10000"
          onChange={handleMaxCountChange}
        />
        <div className="w-full h-full flex flex-col items-end">
          <div
            ref={textAreaRef}
            className="w-[55rem] h-96 mt-10 overflow-auto p-2 border border-gray-300"
            contentEditable={true}
            onInput={handleTextChange}
            style={{ whiteSpace: 'pre-wrap' }}
          />
          <div>
            <span>
              {/* <span className={`${textInput.length - maxCount > 0 ? 'text-[#b7c3ec]' : ''}`}>{maxCount - textInput.length}</span> Characters Left */}
              <span className={getRemainingCountClass()}>{maxCount - textInput.length >= 0 ? maxCount - textInput.length : 0}</span> Characters Left
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
