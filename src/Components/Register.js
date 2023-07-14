import React from 'react'
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './Registercss.css';
let Register = () => {
  // const [name,setname]=useState();
  // const [fname,setfname]=useState();
  let navigate=useNavigate();
  const [userinfo, setuserinfo] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword:''
  });
  const inp1 = (event) => {
    // setname(event.target.value);
    const { value, name } = event.target          //object destructuring is different from array destructuring.It is object destructuring.
    console.log(value);
    console.log(name);
    // setuserinfo((previnfo) => {
    //   return {
    //     ...previnfo,
    //     [name]: value
    //   };
    


      //The same below thing is just done with above two lines for any no of input fields with the help of {spread operator '...'}



      // if (name==='name'){
      //     return {
      //      name:value,
      //      email:previnfo.email,
      //      phone:previnfo.phone,
      //      add:previnfo.add
      //     };
      // }
      // else if (name==='email'){
      //     return {
      //      name:previnfo.name,
      //      email:value,
      //      phone:previnfo.phone,
      //      add:previnfo.add
      //     };
      // }
      // else if (name==='phone'){
      //     return {
      //      name:previnfo.name,
      //      email:previnfo.email,
      //      phone:value,
      //      add:previnfo.add
      //     };
      // }
      // else if (name==='add'){
      //     return {
      //      name:previnfo.name,
      //      email:previnfo.email,
      //      phone:previnfo.phone,
      //      add:value
      //     };
      // }

    // });
    setuserinfo({...userinfo,[name]:value});
  };

  const PostData = async (e) => {
    try {
      console.log('helloclient',userinfo);
      e.preventDefault();
      let {name,email,phone,work,password,cpassword}=userinfo;
      console.log("client",name)
      let res=await fetch('/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          name,email,phone,work,password,cpassword
        })

      });
      let data=await res.json();
      console.log('client',data);
      if(res.status === 422 || !data){
        window.alert('Invalid Registeration');
        console.log('Invalid Registeration');
      }
      else{
        window.alert('User registered successfully');
        console.log('User registered successfully');
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <>
      <div className='main_div'>
        <form method='POST'>
          <div className='Card'>
            <h2>Register</h2>
            <input
              type='text'
              placeholder='Enter your name'
              onChange={inp1}
              value={userinfo.name}
              autoComplete='off'
              name='name'         //to know or identify which tag calls the function.
            />
            <input
              type='text'
             
              placeholder='Enter your email'
              onChange={inp1}
              value={userinfo.email}
              autoComplete='off'
              name='email'         //to know or identify which tag calls the function.
            />
            <input
              type='number'
              placeholder='Enter your phone'
              onChange={inp1}
              value={userinfo.phone}
              autoComplete='off'
              name='phone'         //to know or identify which tag calls the function.
            />
            <input
              type='text'
              placeholder='Enter your work'
              onChange={inp1}
              value={userinfo.work}
              autoComplete='off'
              name='work'         //to know or identify which tag calls the function.
            />
            <input
             type="password" 
             placeholder='Enter your password'
             onChange={inp1}
             value={userinfo.password}
             autoComplete='off'
             name="password"
             />
             <input
             type="password" 
             placeholder='Enter your confirm password'
             onChange={inp1}
             value={userinfo.cpassword}
             autoComplete='off'
             name="cpassword"
             />
            <button type='submit' onClick={PostData}>Submit</button>
            {/* <input type='submit'/> */}
          </div>
        </form>
      </div>
    </>

  );
};
export default Register