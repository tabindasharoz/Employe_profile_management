import React, { useState } from 'react'

const Registration=()=> {
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [salary,setSalary]=useState("");

   
    const regcode= async (e)=>{
      e.preventDefault();
      const emp={firstname,lastname,email,salary};
      const response= await fetch('http://localhost:8000/',{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(emp)
    });
    const result = await response.json();

     if(result.msg=="Success"){
      alert("Registration success");
      setFirstname("");
      setLastname("");
      setEmail("");
      setSalary("");

     }else{
      alert("failed")
     }
  }
  return (
    <div className='row'>
       
        
        <div className='col-md-6 mx-auto p-5 shadow-lg my-5 rounded-5'>
        <h4><span className='text-danger text-decoration-underline'>registration</span> form</h4>
        <br/>
        <form onSubmit={regcode}>
            enter your First name:
            <input className='form-control' value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} type='text' name='firstname'/>
<br/>
            enter your Last name:
            <input className='form-control' value={lastname} onChange={(e)=>{setLastname(e.target.value)}} type='text' name='lastname'/>
            <br/>
            enter your email:
            <input className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' name='email'/>
            <br/>
            enter your Salary:
            <input className='form-control' value={salary} onChange={(e)=>{setSalary(e.target.value)}} type='number' name='salary'/>
            <br/>
            <button className='form-control btn btn-primary' type='submit'>Submit</button>
            </form></div></div>
  )
}

export default Registration