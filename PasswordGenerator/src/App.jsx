
import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numChecked, setNumChecked] = useState(false);
  const [charChecked, setCharChecked] = useState(false);
  const [password, setPassword] = useState('');

  //useRef hook
  const passwordRef = useRef(null);

  const hashPwdGenerator = useCallback(() => {
    let passwordGenerated = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numChecked) str += '0123456789';
    if (charChecked) str += '`~!@#$%^&*()_+={}[]|;:,./<>?';

    // use when using math.random
    // for (let i = 1; i <=length; i++) {
    //   let charGenerated = Math.floor(Math.random() * str.length + 1);
    //   console.log('charCehcked', charGenerated);
    //   passwordGenerated += str.charAt(charGenerated);   
    // }

    // use when using crypto
    const randomBytes = new Uint8Array(length);
    crypto.getRandomValues(randomBytes);

    for (let i = 0; i < length; i++) {
      const randomIndex = randomBytes[i] % str.length;
      passwordGenerated += str.charAt(randomIndex);
    }
    
    setPassword(passwordGenerated);

  }, [length, numChecked, charChecked, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,26); // to be used if only a certain range of characters is requried
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    hashPwdGenerator();
  }, [length, numChecked, charChecked, hashPwdGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-4xl text-center text-white'>Hash Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value={password}
            className='outline-none w-full py-1 px-3 mt-5 rounded-lg'
            placeholder='Generated Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 rounded-lg text-white px-3 py-0.5 shrink-0 ml-3 mt-4 hover:bg-orange-500 text-dark-500 hover:text-gray-800'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min={8}
              max={126}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={numChecked}
              id="numberInput" 
              onChange={() => setNumChecked((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={charChecked}
              id="charInput" 
              onChange={() => setCharChecked((prev) => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
