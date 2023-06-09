import React, { useEffect } from 'react'
import img from "../assets/userIcon.png"
import "../Css/Landing.css"
import UserNav from './UserNav'
import {auth} from '../Firebase'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

   // useEffect(()=>{
   //    const checkuser = auth.currentUser;
   //    const navigate = useNavigate();
   //    if(!checkuser) {
   //       alert('you need to log in first');
   //       navigate('/');
   //    }
   // },[])

   const user = {
      userid : "33132",
      username : "Mukesh Prasad",
      img : img
   }


   const currUser = auth.currentUser;
   console.log(currUser)
  return (
    <div className='LandingWrapper '>
      <div className="LandingPageContainer mb-3  ">
         <div className="UserBox  d-flex flex-row justify-content-between">
            <div className="userDetails w-50 d-flex flex-column justify-content-center">
               <div className="userIdBox d-flex w-100 justify-content-between">
                  <label htmlFor="UserId w-50">User ID :</label>
                  <div className="userid align-left w-50">{currUser.email}</div>
               </div>
               <div className="userNameBox w-100 d-flex justify-content-between">
                  <label htmlFor="username w-50">User Name :</label>
                  <div className="username w-50 align-start">{currUser.displayName}</div>
               </div>
            </div>
            <div className=" d-flex justify-content-center" >
               <img className='userImage' src={user.img} alt="User" />
            </div>
         </div>
      </div>
      <UserNav/>
    </div>
  )
}

export default Landing
