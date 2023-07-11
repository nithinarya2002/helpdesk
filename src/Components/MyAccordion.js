import React from 'react'
import { useState } from 'react'



// Object destructuring
const MyAccordion = ({query}) => {
    const [show,setshow]=useState(false);
  return (
    <>
    <div className='main-heading'>
        <p onClick={()=>setshow(!show)}>{show?'➖':'➕'}</p>
        <h3>{query}</h3>
    </div>
    { show && <p className='answers'>{}</p>}
    </>
  )
}

export default MyAccordion