  import './App.css'
  import {useState} from 'react';
  import TextBoxContainer from './components/TextBoxContainer/TextBoxContainer'
  import DisplayBoxContainer from './components/DisplayBoxContainer/DisplayBoxContainer';

  function App() {
    const [text, setText] = useState('');
    const [isButtonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
      setButtonClicked(!isButtonClicked);
      setText('');
    }


    return (
      <>
        <h1 className="text-3xl bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600">Text Field Display APP</h1>

        {/* Code for Two components text box and display box */}
        <button 
          type="button" 
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 
            dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
            me-2 mb-2 flex mt-2"
          onClick={handleClick}
        >
          Open Text Field</button>

        { isButtonClicked && (
          <>
            <TextBoxContainer onTextChange={setText} />
            <DisplayBoxContainer text={text} />
          </>
        )
        }
      </>
    )
  }

  export default App
