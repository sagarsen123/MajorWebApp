import React from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import { auth } from '../Firebase'
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      alert("Logged Out Successfully");
    }).catch((error) => {
      alert(error.message);
    });
  }
  console.log(user);
  
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
    {!user && <button className="btn btn-outline-success" onClick={(e)=>{e.preventDefault();navigate('login')}}>
    Log In
    </button>}
      </form>
    </div>
  </div>
</nav>


  )
}

export default Navbar
