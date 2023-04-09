import React, { useEffect } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import {  signOut } from "firebase/auth";
import { ref, onValue ,set} from "firebase/database";
import { auth, rdatabase } from "../Firebase";


const Navbar = ({currVehicle}) => {
  const navigate = useNavigate();
 
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      alert("Logged Out Successfully");
      navigate('/')
    }).catch((error) => {
      alert(error.message);
    });
  }
  const user = auth.currentUser;

  const vehicleState = ref(
    rdatabase,
    "usersDatabase/" + auth.currentUser.uid + "/vehicles/" + currVehicle + "/state"
  );
  console.log(ref);
  onValue(vehicleState,(snapshot) =>{
      console.log(snapshot.val());
      if(snapshot.val()==1){console.log( confirm(`are you starting Your Vehicle ${currVehicle} `));}
  });

  // onValue(vehicleState, (snapshot) => {
  //   if (snapshot.val()==1) {
  //   let check =  confirm(`Are You Starting Your Vehicle ${currVehicle}`);
  //   console.log(check);
  //   }
  //   // if(check) {
  //   // //   set(ref(rdatabase, "usersDatabase/" + curruser.uid + "/vehicles/" + vehicle.vNumber), 
  //   // //  { ...vehicle,state: "running",
  //   // //       time: "15:00",
  //   // //    location: { lat: 23.185884, lng: 79.97438 },}
  //   // // ).then(()=>{alert("data added Successfully"),navigate('/')}).catch((err)=> console.log(err));
  //   // // }
  //   // console.log(check);
  //   // }
  // });


  
  return (
  
  //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  //   <div className="container-fluid">
  //     <Link className="navbar-brand" to="/">
  //       PNR-S3
  //     </Link> 
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-bs-toggle="collapse"
  //       data-bs-target="/navbarNavDropdown"
  //       aria-controls="navbarNavDropdown"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon" />
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
  //       <ul className="navbar-nav">
  //         <li className="nav-item">
  //           <Link className="nav-link active" aria-current="page" to="/">
  //             Home
  //           </Link> 
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/">
  //             About Us
  //           </Link> 
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/">
  //             Team
  //           </Link> 
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/">
  //             Contact Us
  //           </Link> 
  //         </li>
  //       </ul>
  //       <form className="d-flex flex-row justify-content-center align-items-center text-primary">
  //   {user && <p>{user.displayName}</p>}
  //   {user && <button className="btn btn-outline-success" onClick={()=>console.log('Clicked on User SignOut')}>
  //     Sign Out
  //   </button>}
  // </form>
  //     </div>
  //   </div>
  // </nav>
  
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      PNR-S3
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="/navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
           About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
           Team
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
           Contact Us
          </Link>
        </li>
        
        <li className="nav-item">
          <Link
            className="nav-link disabled"
            to="/"
            tabIndex={-1}
            aria-disabled="true"
          >
            Disabled
          </Link>
        </li>
      </ul>
      <form className="d-flex flex-row">
      {user && <p className='m-2 text-light'>{user.displayName}</p>}
     {user && <button className="btn btn-outline-success" onClick={handleSignOut}>
    Sign Out
    </button>}
    {!user && <button className="btn btn-outline-success" onClick={(e)=>{e.preventDefault();navigate('/')}}>
    Log In
    </button>}
      </form>
    </div>
  </div>
</nav>


  )
}

export default Navbar
