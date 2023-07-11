import React, { useEffect } from 'react'
// import questions from './api';
import './accordion.css';
import MyAccordion from './MyAccordion';
import { useState } from 'react';

const Aec = () => {
  const [data,setdata]=useState([]);
  const callaecpage=async()=>{
    try {
      const res=await fetch('/aecell',{
        method:'GET',
        headers:{
          Accept:'appllication/json',
          'Content-Type':'application/json'
        },
        credentials:'include'
      });
      const data=await res.json();
      setdata(data);
      // console.log(data.data)
    } catch (error) {
      console.log(error);
    }
  }
  // callaecpage();   it will loop infinitely so use 'useEffect
  useEffect(()=>{
    callaecpage();
  },[]);
  return (
    <>
        <section className='main-div'>
        <h1>React Interview Questions</h1>
        {
        data.map((curdata)=>{
            return <MyAccordion key={curdata._id} {...curdata}/>
        })
        }
        </section>
    </>
  )
}

export default Aec