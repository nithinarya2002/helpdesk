import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


// Object destructuring if in curly braces!!!!!!
const MyAccordion = (qdata) => {
    const [show,setshow]=useState(false);
    const [reply,setreply]=useState();
    // console.log('accord',qdata);
    const PostResponse=async (e)=>{
      e.preventDefault();
      // console.log('userid',qdata.uid);
      let uid=qdata.uid;
      let qid=qdata._id;
      let dept=qdata.dept;
      let query=qdata.query;
      // console.log(uid);
      // console.log(qid);
      // console.log(query);
      const res=await fetch('/postreply',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({uid,qid,dept,query,reply}),
        withCredentials:true,
        credentials:'include'
      });
      const data=res.json()
      console.log(data)
      console.log('res',res.status)
      if(res.status===422 || !data ||res.status===500){
        window.alert('Not posted');
        console.log('Not posted');
      }
      else{
        window.alert('Response sent');
        console.log('Response sent!!!');
      }
    };
  
    return (
      <>
          <form method='POST'>
          <div className='main-heading'>
            
              <p onClick={()=>setshow(!show)}>{show?'➖':'➕'}</p>
              <h3>{qdata.query}</h3>
          </div>
          { show &&  <>
                    <input
                    type='text'
                    autoComplete='off'
                    placeholder='Respond to query'
                    onChange={(e)=>setreply(e.target.value)}
                    value={reply}
                    name='reply'         //to know or identify which tag calls the function.
                  />
                  <button type='submit' onClick={PostResponse}>Submit</button>
                  </>}
          </form>
    </>
  )
}

export default MyAccordion