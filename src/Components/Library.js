import React, { useEffect } from 'react'
// import questions from './api';
import './accordion.css';
import MyAccordion from './MyAccordion';
import { useState } from 'react';

const Library = () => {
  const [data,setdata]=useState([]);
  const calllibrarypage=async()=>{
    try {
      const res=await fetch('/librarydata',{
        method:'GET',
        headers:{
          Accept:'appllication/json',
          'Content-Type':'application/json'
        },
        credentials:'include'
      });
      const data=await res.json();
      setdata(data);
      console.log('libdata',data)
    } catch (error) {
      console.log(error);
    }
  }
  calllibrarypage();
  // callaecpage();   it will loop infinitely so use 'useEffect
  // useEffect(()=>{
  //   calllibrarypage();
  // },[]);
  return (
    <>
        <section className='main-div'>
        <h1>Library Queries</h1>
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

export default Library