import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../App';

const Login = () => {
  const {state,dispatch}=useContext(UserContext);
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const navigate=useNavigate();

  const Postlogindata=async (e)=>{
    e.preventDefault();
    const res=await fetch('/signin',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email,password}),
      withCredentials:true,
      credentials:'include'
    });
    const data=res.json()
    console.log(data)
    console.log('res',res.status)
    if(res.status===422 || !data ||res.status===500){
      window.alert('Invalid credentials');
      console.log('Invalid credentials');
    }
    else{
      dispatch({type:"USER",payload:true})
      window.alert('Login Successful');
      console.log('Login Successful!!!');
      navigate('/select');
    }
  };

  

  return (
    <>
      <div className='main_div'>
        <form method='POST'>
          <div className='Card'>
            <h2>Login</h2>
            <input
              autoComplete='off'
              type='text'
              placeholder='Enter your email'
              onChange={(e)=>setemail(e.target.value)}
              value={email}
              name='email'         //to know or identify which tag calls the function.
            />
            <input
            autoComplete='off'
             type="password" 
             placeholder='Enter your password'
             onChange={(e)=>setpassword(e.target.value)}
             value={password}
             name="password"
             />
            
            <button type='submit' onClick={Postlogindata}>Submit</button>
            {/* <input type='submit'/> */}
          </div>
        </form>
      </div>
    </>

  );
};
export default Login;