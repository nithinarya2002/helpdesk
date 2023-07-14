import React, { useEffect } from 'react'
// import questions from './api';
import './accordion.css';
import MyAccordion1 from './MyAccordion1';
import { useState } from 'react';

const Sportsresponse = () => {
  const [data,setdata]=useState([]);
  const callresponsepage=async()=>{
    try {
      const res=await fetch('/respsports',{
        method:'GET',
        headers:{
          Accept:'appllication/json',
          'Content-Type':'application/json'
        },
        credentials:'include'
      });
      const data=await res.json();
      setdata(data);
      console.log('response',data)
    } catch (error) {
      console.log(error);
    }
  }
  // callaecpage();   it will loop infinitely so use 'useEffect
  useEffect(()=>{
    callresponsepage();
  },[]);
  return (
    <>
        <section className='main-div'>
        <h1>Sports Query Responses</h1>
        {console.log('func',data)}
        {
        data.map((curdata)=>{
            console.log(curdata)
            return <MyAccordion1 key={curdata._id} {...curdata}/>
        })
        }
        </section>
    </>
  )
}

export default Sportsresponse;