
import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      let calculatedBmi = (weight / (height * height)) * 703;
      setBmi(calculatedBmi.toFixed(1));

      if (calculatedBmi < 25) {
        setMessage('You are underweight');
      } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
        setMessage('You are a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="number"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Height (in)</label>
            <input
              type="number"
              placeholder="Enter height value"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="button" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;