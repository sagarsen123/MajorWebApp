import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, rdatabase } from "../Firebase";
import { ref, set } from "firebase/database";
import "../Css/AddVehicle.css";

const AddaVehicle = () => {
  let curruser;
  useEffect(() => {
    curruser = auth.currentUser;
    if (!curruser) {
      alert("You need to Sign In First");
      navigate("/login");
      return;
    }
  }, []);

  // user structur
  const [vehicle, setVahicle] = useState({
    ownerName: "",
    vNumber: "",
    vType: "",
    company: "",
    mNumber: "",
    gpsId: "",
    engType: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitDisables, setSubmitDisables] = useState(false);

  const navigate = useNavigate();

  const handleAddVehicleSubmit = (e) => {
    e.preventDefault();
    setSubmitDisables(true);
    if (
      !vehicle.ownerName ||
      !vehicle.vNumber ||
      !vehicle.vType ||
      !vehicle.company ||
      !vehicle.mNumber ||
      !vehicle.gpsId ||
      !vehicle.engType
    )
      return setErrorMsg("All Fields Are Required");
    if (vNumber.length < 10) return setErrorMsg("Enter A valid Vehicle Number");
      curruser = auth.currentUser;
    set(ref(rdatabase, "usersDatabase/" + curruser.uid + "/vehicles/" + vehicle.vNumber), 
     { ...vehicle,state: "running",
          time: "15:00",
       location: { lat: 23.185884, lng: 79.97438 },}
    ).then(()=>{alert("data added Successfully"),navigate('/')}).catch((err)=> console.log(err));



    // set(ref(rdatabase, "usersDatabase/" + curruser.uid + "/vehicles"), {
    //   email:curruser.email,
    //   userName: curruser.displayName,
    //   vehicles: {
    //     ...vehicle,
    //     state: "running",
    //     time: "15:00",
    //     location: { lat: 23.185884, lng: 79.97438 },
    //   },
    // });



    setSubmitDisables(false);
    console.log(vehicle);
  };

  return (
    <div className="AddVehicleWrapper">
      <div className="addVehicleContainer">
        <h2>ADD A VEHICLE</h2>
        <hr />
        <form action="" method="post">
          <div className="form-group">
            <input
              type="text"
              name="ownerName"
              id="ownerName"
              placeholder="Enter OwnerName "
              value={vehicle.ownerName}
              onChange={(e) => {
                setErrorMsg("");

                setVahicle((p) => ({ ...p, ownerName: e.target.value }));
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="vNumber"
              id="vNumber"
              placeholder="Enter Vehicle Number "
              value={vehicle.vNumber}
              onChange={(e) => {
                setErrorMsg("");
                setVahicle((p) => ({ ...p, vNumber: e.target.value }));
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="vType"
              id="vType"
              placeholder="Enter Vehicle Type "
              value={vehicle.vType}
              onChange={(e) => {
                setErrorMsg("");
                setVahicle((p) => ({ ...p, vType: e.target.value }));
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Enter Vehicle's Company  "
              value={vehicle.company}
              onChange={(e) => {
                setErrorMsg("");
                setVahicle((p) => ({ ...p, company: e.target.value }));
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="mNumber"
              id="mNumber"
              placeholder="Enter Model No. "
              value={vehicle.mNumber}
              onChange={(e) => {
                setErrorMsg("");
                setVahicle((p) => ({ ...p, mNumber: e.target.value }));
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="gpsId"
              id="gpsId"
              placeholder="Enter GPS ID"
              value={vehicle.gpsId}
              onChange={(e) => {
                setErrorMsg("");
                setVahicle((p) => ({ ...p, gpsId: e.target.value }));
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="engType"
              id="engType"
              placeholder="Enter Engine Type "
              value={vehicle.engType}
              onChange={(e) => {
                setErrorMsg("");
                setVahicle((p) => ({ ...p, engType: e.target.value }));
              }}
            />
          </div>
          <p className="errorMsg">{errorMsg}</p>
          <button
            className="button"
            disabled={submitDisables}
            onClick={handleAddVehicleSubmit}
          >
            Add The Vehicle
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddaVehicle;
