import React, { useState } from 'react'
import './Form.css';

function Forms() {
const[values, setValues]=useState({
    name:"",
    age:"",
    phonenumber:"",
    email:" ",
    country:""
});
const[errors, setErrors]=useState({});



const handleClick=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setValues({...values, [name]:value})

}
function  validation(values){
  const errors={}
  const email_pattern=/^[^\s@]+@[^\s@]+\.[^\$@]{2,6}$/;

if(values.name === ""){
    errors.name="Name is required";
}

if(values.email === ""){
    errors.email="Email is Required";
}

else if(!email_pattern.test(values.email)){
    errors.email=" Invalid Email";
}

if(values.phonenumber === ""){
    errors.phonenumber="Numberis Required ";
}
if(values.age === ""){
    errors.age="Age is Required ";
}
if(values.country === ""){
    errors.country="Country is Required ";
}
return errors;

}



function handleValidation(e){
    e.preventDefault();
    setErrors(validation(values))

}



    
    



  return (
   <>
   <div className='Forms'>
<form onSubmit={handleValidation}>
    <div className='formsection'>
    <div>
    <label >Enter Your Name</label>
<input type="text" name="name" value={values.name} onChange={handleClick}/>
{errors.name && <p className='error'>{errors.name}</p>}
</div>
<div>
<label >Enter Your Age</label>
<input type="text" name="age" value={values.age} onChange={handleClick} />
{errors.age && <p className='error'>{errors.age}</p>}
</div>

<div>
<label >Enter Your Phone Number</label>
<input type="text" name="phnonenumber" value={values.phonenumber} onChange={handleClick} />
{errors.phonenumber && <p className='error'>{errors.phonenumber}</p>}
</div>

<div>
<label >Enter Your Email</label>
<input type="email" name="email" value={values.email}  onChange={handleClick}/>
{errors.email && <p className='error'>{errors.email}</p>}
</div>

<div>
<label >Enter Your Country</label>
<input type="text" name="country"  value={values.country} onChange={handleClick}/>
{errors.country && <p className='error'>{errors.country}</p>}
</div>
<div>
<button>Submit</button>
</div>
<div>
    {values.name}  {values.age}   {values.phonenumber}   {values.email}   {values.country}
</div>
</div>
</form>



   </div>
   
   
   
   
   
   </>
  )
}

export default Forms