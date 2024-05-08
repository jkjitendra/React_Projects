import {useState} from 'react';
import './App.css'
import InputField from './components/common/input-field/input';
import SelectField from './components/common/select-field/select';

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
    let bmiVal = 0;

    const isValidWeight = weight > 0 && !isNaN(weight);
    const isValidHeight = height > 0 && !isNaN(height);

    if (!isValidWeight ||!isValidHeight) {
      errorMessageVal = 'Please enter valid weight and height > 0';
      messageClassVal = 'error-message-dark-red';
    } else {
      let weightVal = unitOfWeight === 'lb' ? weight * 0.45359237 : weight;
      let heightVal = unitOfHeight === 'm' ? height * 100 : unitOfHeight === 'foot'? height * 30.48 : height;
      
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
            <SelectField 
              value={unitOfWeight}
              optionValues={["kg", "lb"]}
              onChange={handleWeightUnitChange}
            />
            <InputField
              type='number'
              name='weight'
              placeholder='Enter your weight'
              value={weight}
              onChange={(e) => handleWeightChange(e)}
            />
          </div>
          <div className='input-group'>
            <label>Height</label>
            <SelectField 
              value={unitOfHeight}
              optionValues={["cm", "m", "foot"]}
              onChange={handleHeightUnitChange}
            />
            <InputField
              type='number'
              name='height'
              placeholder='Enter your height'
              value={height}
              onChange={handleHeightChange}
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
