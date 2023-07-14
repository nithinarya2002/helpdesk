import React, { useEffect } from 'react'
// import questions from './api';
import './accordion.css';
import MyAccordion from './MyAccordion';
import { useState } from 'react';

const Aec = () => {
  const [data,setdata]=useState([]);
  const callaecpage=async()=>{
    try {
      const res=await fetch('/aecelldata',{
        method:'GET',
        headers:{
          Accept:'appllication/json',
          'Content-Type':'application/json'
        },
        credentials:'include'
      });
      const data=await res.json();
      setdata(data);
      console.log('aec',data)
    } catch (error) {
      console.log(error);
    }
  }
  callaecpage();
  // callaecpage();   it will loop infinitely so use 'useEffect
  // useEffect(()=>{
  //   callaecpage();
  // },[]);
  return (
    <>
        <section className='main-div'>
        <h1>Academic Examination Queries</h1>
        {console.log('func',data)}
        {
        data.map((curdata)=>{
            console.log(curdata)
            return <MyAccordion key={curdata._id} {...curdata}/>
        })
        }
        </section>
    </>
  )
}

export default Aec