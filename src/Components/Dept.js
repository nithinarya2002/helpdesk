import React from "react";
import Sdata from './Sdata';
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


function Dept(){
    return (
    <>
    <h1 className="header">Welcome to Website</h1>
    {Sdata.map(nCard)}
    </>
    );
  }

export default Dept;