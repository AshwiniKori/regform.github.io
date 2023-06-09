import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [inputs, setInputs] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("you have registered successfully!");
    }
    const handleOnchange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const obj = {
            ...inputs,
            [name]:value
        }
        setInputs(obj);
    }


  return (
    <div className='form'>
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
            <label>Enter Your Full Name</label>
            <input type = "text" 
            pattern =  "/^[a-zA-Z]*$/"
            name = "name"
            value = {inputs.name || ""} 
            onChange = {handleOnchange} />
            
            <br></br>
            <br></br>

            <label>Enter Your Email Id</label>
            <input type = "email" 
            pattern='/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i'
            name = "email"
            value = {inputs.email || ""} 
            onChange = {handleOnchange} />

            <br></br>
            <br></br>

            <label>Enter Your Mobile Number</label>
            <input type = "number" 
            maxLength = "10"
            name = "num"
            value = {inputs.num || ""} 
            onChange = {handleOnchange} />

            <br></br>
            <br></br>

            <label>Enter Your Password</label>
            <input type = "password" 
            name = "pswd"
            value = {inputs.pswd || ""} 
            onChange = {handleOnchange} />

            <br></br>
            <br></br>

            <label>Confirm Password</label>
            <input type = "password" 
            name = "pswd"
            value = {inputs.pswd || ""} 
            onChange = {handleOnchange} />

            <br></br>
            <br></br>

            <button type="submit">Submit</button>

        </form>
    </div>
  )
}

export default Form