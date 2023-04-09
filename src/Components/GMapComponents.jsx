import React, { useEffect, useMemo, useState } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import "../Css/GMapComponents.css";
import { ref, onValue } from "firebase/database";
import { auth, rdatabase } from "../Firebase";

const GMapComponents = ({ currVehicle }) => {
  const { isLoaded } = useLoadScript({
    GoogleMapsAPI: "AIzaSyA5x2tg-jw5XMy2bPHMsXABSAD6by3uvZU",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className=" d-flex justify-content-center align-items-center ">
      <Map currVehicle={currVehicle} />
    </div>
  );
};
const Map = ({ currVehicle }) => {
  let user;
  useEffect(() => {
    user = auth.currentUser;
  });

  const [vloc, setVloc] = useState({ lat: 23.185884, lng: 79.97438 });

  user = auth.currentUser;
  const location = ref(
    rdatabase,
    "usersDatabase/" + user.uid + "/vehicles/" + currVehicle + "/location"
  );
  onValue(location, (snapshot) => {
    if (snapshot.val().lat !== vloc.lat && snapshot.val().lng !== vloc.lng)
      setVloc(snapshot.val());
    console.log(typeof snapshot.val().lat);
  });

  const Mapcenter = useMemo(() => vloc, []);

  return (
    <GoogleMap
      zoom={2}
      center={Mapcenter}
      mapContainerClassName="mapcontainer"
    >
      <MarkerF position={vloc} />
    </GoogleMap>
  );
};

export default GMapComponents;
