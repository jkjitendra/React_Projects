import {useState} from 'react';
import './App.css'

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setbmi] = useState('');
  const [message, setMessage] = useState('');
  const [messageClass, setMessageClass] = useState('');
  const [unitOfWeight, setUnitOfWeight] = useState('kg');
  const [unitOfHeight, setUnitOfHeight] = useState('cm');

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  }

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  }

  const handleWeightUnitChange = (e) => {
    setUnitOfWeight(e.target.value);
  }

  const handleHeightUnitChange = (e) => {
    setUnitOfHeight(e.target.value);
  }

  const calculateBMI = (e) => {
    // To be implemented
    e.preventDefault();

    let errorMessageVal = '';
    let messageClassVal = '';

    if (weight === 0 || isNaN(weight) || weight < 0 || height === 0 || isNaN(height) || height < 0) {
      errorMessageVal = 'Please enter valid weight and height > 0';
      messageClassVal = 'error-message-dark-red';
  } else {

      let bmiVal;
      let weightVal;
      let heightVal;
      
      if (unitOfWeight === 'lb' && unitOfHeight === 'cm') {
        weightVal = weight * 0.45359237; // 1 lb = 0.45359237 kg
        heightVal = height;
      }
      
      if (unitOfWeight === 'kg' && unitOfHeight === 'm') {
        heightVal = height * 100; // 1 m = 100 cm
        weightVal = weight;
      }
      
      if (unitOfWeight === 'lb' && unitOfHeight === 'm') {
        weightVal = (weight * 0.45359237).toFixed(0);
        heightVal = height * 100;
      }

      if (unitOfWeight === 'kg' && unitOfHeight === 'foot') {
        weightVal = weight;
        heightVal = (height * 30.48).toFixed(0); // 1 foot = 30.48 cm
      }
      
      if (unitOfWeight === 'lb' && unitOfHeight === 'foot') {
        weightVal = (weight * 0.45359237).toFixed(0);
        heightVal = (height * 30.48).toFixed(0);
      }

      if (unitOfWeight === 'kg' && unitOfHeight === 'cm') {
        heightVal = height;
        weightVal = weight;
      }
     
      bmiVal = weightVal / (heightVal * heightVal) * 10000;
      setbmi(bmiVal.toFixed(1));

      if (bmiVal < 18.5) {
        errorMessageVal = 'Underweight';
        messageClassVal = 'error-message-light-red';
      } else if (bmiVal < 25) {
          errorMessageVal = 'Normal';
          messageClassVal = 'error-message-green';
      } else if (bmiVal < 30) {
          errorMessageVal = 'Overweight';
          messageClassVal = 'error-message-yellow';
      } else if (bmiVal <= 35) {
          errorMessageVal = 'Obese';
          messageClassVal = 'error-message-higher-red';
      } else {
          errorMessageVal = 'Morbid obesity';
          messageClassVal = 'error-message-higher-red';
      }
    }
    setMessage(errorMessageVal);
    setMessageClass(messageClassVal);
  }

  const clearFields = () => {
    // To be implemented
    setHeight(0);
    setWeight(0);
    setbmi('');
    setMessage('');
  }

  return (
    <div className='app'>
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form>
          <div className='input-group'>
            <label>Weight</label>
            <select value={unitOfWeight} onChange={handleWeightUnitChange}>
              <option value="kg">kg</option>
              <option value="lb">lb</option>
            </select>
            <input
              type='number'
              name='weight'
              placeholder='Enter your weight'
              value={weight}
              onChange={(e) => handleWeightChange(e)}
            />
          </div>
          <div className='input-group'>
            <label>Height</label>
            <select value={unitOfHeight} onChange={handleHeightUnitChange}>
              <option value="cm">cm</option>
              <option value="m">m</option>
              <option value="foot">foot</option>
            </select>
            <input
              type='number'
              name='height'
              placeholder='Enter your height'
              value={height}
              onChange={(e) => handleHeightChange(e)}
            />
          </div>
          <div className='button-group center'>
            <button className='btn' type='submit' onClick={calculateBMI} >Calculate</button>
            <button className='btn btn-outline' type='submit' onClick={clearFields} >Clear</button>
          </div>
          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p className={messageClass}>{message}</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
