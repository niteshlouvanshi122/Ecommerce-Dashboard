import React, {  useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";


const SignUp = () => {
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const navigate = useNavigate();

    useEffect (() => {
      const auth = localStorage.getItem("Users");
      if(auth){
        navigate("/")
      }
    })

  const collectData = async ()=>{
    console.warn(name, email, password);

    let result = await fetch("http://localhost:5000/register", {
        method: 'post',
        body: JSON.stringify({ name, email, password }),
        headers: {
            'Content-Type': 'application/json',
            'authorization' : `bearer, ${JSON.parse(localStorage.getItem("token"))}`
        }
    });
    result = await result.json();
    console.warn(result);
    if(result.auth){
            localStorage.setItem("Users", JSON.stringify(result.result));
            localStorage.setItem("token", JSON.stringify(result.auth));
            navigate("/")
        }else{
            alert("please enter correct details")
        }
}

  return (
    <div className='register' >

       <h1> Register </h1>

       <input className='inputBox' type='text'
       value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
       
       <input className='inputBox' type='text'
        value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
       
       {/* <input className='inputBox' type='password'
        value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/> */}

       <input className="inputBox" type="password" placeholder="Enter password"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
       
       <button onClick={collectData} className='appButton' type='button' >Sing Up</button>

    
    </div>
  )
}

export default SignUp ;