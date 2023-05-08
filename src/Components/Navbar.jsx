import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { ref, onValue, update } from "firebase/database";
import { auth, rdatabase } from "../Firebase";

const Navbar = ({ currVehicle }) => {
  const navigate = useNavigate();


  try {
    const vehicleState = ref(
      rdatabase,
      "usersDatabase/" + auth.currentUser.uid + "/vehicles/" + currVehicle
    );

    onValue(vehicleState, (snapshot) => {
      
      
      if (snapshot.val().state === 1 && snapshot.val().allow === 0 ) {
        update(
          ref(
            rdatabase,
            "usersDatabase/" + auth.currentUser.uid + "/vehicles/" + currVehicle
          ),
          { state: 0 }
        );
        let
        check = confirm(
            `Do You Want Your Vehicle ${currVehicle} to Start? click ok to Allow Cancel To Deny`
          );
        

        if (check) {
          console.log("Permission Allowed");
          update(
            ref(
              rdatabase,
              "usersDatabase/" +
                auth.currentUser.uid +
                "/vehicles/" +
                currVehicle
            ),
            { state: 1, allow: 1 }
          );
        } else if (!check) {
          console.log("Permission Denied");

          update(
            ref(
              rdatabase,
              "usersDatabase/" +
                auth.currentUser.uid +
                "/vehicles/" +
                currVehicle
            ),
            { allow: 0, state: 0.0 }
          );
        }
   
      }
    });
  } catch (err) {
    console.log(err);
  }

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        alert("Logged Out Successfully");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

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

  const user = auth.currentUser;
  return (
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

            
          </ul>
          <form className="d-flex flex-row">
            {user && <p className="m-2 text-light">{user.displayName}</p>}
            {user && (
              <button
                className="btn btn-outline-success"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            )}
            {!user && (
              <button
                className="btn btn-outline-success"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                Log In
              </button>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
