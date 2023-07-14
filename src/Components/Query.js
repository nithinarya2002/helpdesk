import React, { useState } from 'react';
// import './Query.css'

const Query=()=>{

    const [qinfo,setqinfo]=useState({
        name:'',
        rno:'',
        sem:'',
        branch:'',
        dept:'',
        query:''

    });

    const f1=(event)=>{
        const {name,value}=event.target
        setqinfo({...qinfo,[name]:value});
    };

    const Postquery=async (e)=>{
        try {
            e.preventDefault();
            let {name,rno,sem,branch,dept,query}=qinfo;
            let res=await fetch('/qsubmit',{
                method:'POST',
                headers:{
                  'Content-Type':'application/json'
                },
                body:JSON.stringify({name,rno,sem,branch,dept,query})
              });
              const data=await res.json();
              if(res.status===422  || !data){
                window.alert('Failed to submit query');
                console.log('Failed to submit query');
              }
              else{
                window.alert('Query Submitted successfully');
                console.log('Query submitted successfully');
              }
        } catch (error) {
            console.log(error)       
        }      
    };
    return (
    <>

        <div className='main_div'>
            
            <form method='POST'>
                <div className='Card'>
                    <h1>Submit Query!</h1>
                    <input
                    type='text'
                    autoComplete='off'
                    placeholder='Enter your name'
                    onChange={f1}
                    name='name'
                    value={qinfo.name}
                    />
                    <input
                    type='number'
                    autoComplete='off'
                    placeholder='Enter your Rollnumber'
                    onChange={f1}
                    name='rno'
                    value={qinfo.rno}
                    />
                    <input
                    type='number'
                    autoComplete='off'
                    placeholder='Enter your Semester and year'
                    onChange={f1}
                    name='sem'
                    value={qinfo.sem}
                    />
                     <input
                    type='text'
                    autoComplete='off'
                    placeholder='Enter your branch'
                    onChange={f1}
                    name='branch'
                    value={qinfo.branch}
                    />
                    <input
                    type='text'
                    autoComplete='off'
                    placeholder='Enter concerned Department'
                    onChange={f1}
                    name='dept'
                    value={qinfo.dept}
                    />
                    <textarea 
                    type='text'
                    autoComplete='off'
                    placeholder='Enter your Query'
                    onChange={f1}
                    name='query'
                    value={qinfo.query}
                    />
                    <button type='submit' onClick={Postquery}>Submit</button>
                </div>
            </form>
        </div>
        {/* onClick={PostData} */}
    </>);
}

export default Query;