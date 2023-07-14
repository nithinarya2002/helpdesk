import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../App';
const Logout = () => {
    const {state,dispatch}=useContext(UserContext);
    const navigate=useNavigate();
    useEffect(()=>{
        fetch('/logout',{
            method:'GET',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            withCredentials:true,
            credentials:'include'
        }).then((res)=>{
            navigate('/login');
            dispatch({type:"USER",payload:false});
            if(res.status!=200){
                const error=new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        });
    });
  return (
    <>
        <h1>log out page!!!</h1>
    </>
  )
}

export default Logout