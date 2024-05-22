 import { useState } from 'react';
import './App.css';

function App() {
const[height, setHeight] =useState("");
const[weight, setWeight] =useState("");
const[bmi,setBmi]=useState(null);
const[status,setStatus]=useState("");
const[errorMessage,setErrorMessage]=useState("");

const handleBmi=()=>{
  const isValidHeight=/^\d+$/.test(height);
  const isValidWeight=/^\d+$/.test(weight);

  if(isValidHeight && isValidWeight){
    const heightInMeters=height/100;
    const bmiValue= weight/(heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    if(bmiValue <18.5){
      setStatus("UnderWeight");
    }else if(bmiValue >=18.5 && bmiValue <24.9){
      setStatus("NormalWeight");
    }else if(bmiValue >=25 && bmiValue < 29.9){
      setStatus("OverWeight");
    }else{
      setStatus("Obsese");
    }
    setErrorMessage("");

  }else{
setBmi(null);
setStatus("");
setErrorMessage("Please enter valid numberic values for height and weight.")
  }


}
const clearAll=()=>{
  setHeight("");
  setWeight("");
  setBmi(null);
  setStatus("");
  setErrorMessage("");
}


  return (
   
    <>
<div className='Container'>
  <div className='box'></div>
<div className='data'>
  <h2>Bmi calculator</h2>
  {errorMessage && < p className="error">{errorMessage}</p>}
  <div className='Height'>
    <label htmlFor='height'>Height (cm):</label>
    <input text="number" id="height" value={height} onChange={(e)=>{
      setHeight(e.target.value)
    }}/>
  </div>
  <div className='Weight'>
    <label htmlFor='weight'>Weight (Kg):</label>
    <input text="number" id="weight" value={weight} onChange={(e)=>{
      setWeight(e.target.value)}} />
  </div>
  <div>
    <button onClick={handleBmi}>Calculate BMI</button>
    <button onClick={clearAll}>Clear</button>
  </div>

  {bmi !== null &&  (
  <div className='para'>
  <p>Your BMI is: {bmi}</p>
  <p>Status: {status}</p>
  </div>
  )}
</div>
</div>



    </>
  
  );
}

export default App;
