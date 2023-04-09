import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import "../Css/SignUp.css"

import {auth} from "../Firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const SignUp    = () => {


  useEffect(()=>{
    const curruser = auth.currentUser;
    if(curruser) {
      alert("You need to Sign Out First");
      navigate('/');
      return;
    }

  },[]);

  const[values,setValues]=useState({
    name:"",email:"",password:"",cpassword:""
  });

  const[errorMsg,setErrorMsg] = useState("");
  const[submitDisables,setSubmitDisables] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
   
    e.preventDefault();
    if(!values.email || !values.password || !values.cpassword || !values.name) return  setErrorMsg("All Fields Are Required");
    if(values.password !== values.cpassword) return setErrorMsg("Your Passwords Does Not Matches")
    if(values.password.length < 8 ) return setErrorMsg("Password must be 8 characters long")
    setSubmitDisables(true);
   setErrorMsg("");
    createUserWithEmailAndPassword(auth,values.email,values.password).then(async(res)=>{
      const user = res.user;
      await updateProfile(user,{displayName:values.name})
      navigate('/');
    })
    .catch((err) => setErrorMsg(err.message));

    setSubmitDisables(false);
    console.log(values);
  }


  return (
    <div className="signupWrapper">

    <div className='SignUpContainer'>
     <h2>Sign Up</h2>
     <hr />
      <form action="" method="post">
      <div className="userName form-group">
            
            <input type="name" name="name" id="name" value={values.name} onChange={(e) => {
              setValues((p)=>({...p,name:e.target.value}))
            }} placeholder='Enter Your Full Name ' />
          </div>
          <div className="userName form-group">
            
            <input type="email" name="email" id="email" value={values.email} onChange={(e) => {
              setValues((p)=>({...p,email:e.target.value}))
            }} placeholder='Enter Your Username ' />
          </div>
          <div className="Password form-group">
            <input type="password" name="password" id="password " value={values.password} onChange={(e) => {
              setValues((p)=>({...p,password:e.target.value}))
            }} placeholder='Enter Your Password' />
          </div>
          <div className="Password form-group">
          <input type="password" name="cpassword" id="cpassword " value={values.cpassword} onChange={(e) => {
            setValues((p)=>({...p,cpassword:e.target.value}))
          }} placeholder='Confirm Your Password' />
        </div>
          <p className='errorMsg'>{errorMsg}</p>
          <button disabled={submitDisables} className='button' onClick={handleSubmit} type="submit">Sign Up</button>
      </form>
      <div className="already">
        <p>Already Have a New Account <span><strong><Link to="/">Log In</Link></strong></span></p>
      </div>
    </div>
    </div>
  )
}

export default SignUp   
