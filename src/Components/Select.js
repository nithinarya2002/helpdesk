import React from 'react'
import { useNavigate } from 'react-router-dom'

const Select = () => {
    const navigate=useNavigate();
  return (
    <>
    <button type='submit' onClick={()=>navigate('/query')}>Query</button>
    <button type='submit' onClick={()=>navigate('/response')}>Responses</button>
    <button type='submit' onClick={()=>navigate('/dept')}>Faculty</button>
   
    </>
  )
}

export default Select