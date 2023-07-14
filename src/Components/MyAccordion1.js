import React from 'react'
import { useState } from 'react'
import './accordion.css'



// Object destructuring
const MyAccordion1 = ({query,reply}) => {
    const [show,setshow]=useState(false);
  return (
    <>
    <div className='main-heading'>
        <p onClick={()=>setshow(!show)}>{show?'➖':'➕'}</p>
        <h3>{query}</h3>
    </div>
    { show && <p className='answers'>{reply}</p>}
    </>
  )
}

export default MyAccordion1