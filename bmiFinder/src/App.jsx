import {useState} from 'react';
import './App.css'

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setbmi] = useState('');
  const [message, setMessage] = useState('');

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  }

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  }

  const calculateBMI = () => {
    // To be implemented
  }

  const clearFields = () => {
    // To be implemented
  }

  return (
    <div className='app'>
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form>
          <div>
            <label>Weight (kg)</label>
            <input
              type='number'
              name='weight'
              placeholder='Enter your weight'
              value={weight}
              onChange={handleWeightChange}
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input
              type='number'
              name='height'
              placeholder='Enter your height'
              value={height}
              onChange={handleHeightChange}
            />
          </div>
          <div>
            <button className='btn' type='submit' onClick={calculateBMI} >Calculate</button>
            <button className='btn btn-outline' type='submit' onClick={clearFields} >Clear</button>
          </div>
          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
