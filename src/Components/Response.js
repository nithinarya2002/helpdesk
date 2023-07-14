import React from "react";
import Sdata1 from './Sdata1';
import Card from './Card';


function nCard(val){
    return <>
      <Card
        imgsrc={val.image}
        sname={val.sname}
        title={val.title}
        link={val.link}
      />
    </>
  }


function Response(){
    return (
    <>
    <h1 className="header">Welcome to Website</h1>
    {Sdata1.map(nCard)}
    </>
    );
  }

export default Response;