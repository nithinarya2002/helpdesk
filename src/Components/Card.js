import React from 'react';
// import {useNavigate} from 'react-router-dom';
// import React, { useState } from 'react';
import './Cardcss.css'
import { NavLink } from 'react-router-dom';
// import lib from './Images/lib.jpg'
function Card(props){

    // let navigate=useNavigate();

    // const f1=()=>{
    //   let path='./Query';
    //   navigate(path);
    // };

    // const [check,setcheck]=useState(false);

    // const f1=()=>{
    //   setcheck(!check);
    // };
    return (
      <>
      <div className='cards'>
        <div className='card'>
          <img src={props.imgsrc} alt='mypic' className='card_img' />
          <div className='card_info'>
            {/* <span className='card_category'>{props.title}</span> */}
            <h3 className='card_title'>{props.sname}</h3>
            <NavLink to={props.link} ><button>Click here!</button></NavLink>
          </div>
        </div>
      </div>
    </>
    );
  }

  export default Card;

  // {props.imgsrc} 