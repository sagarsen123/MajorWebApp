import HomePage from "./Components/HomePage"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import SignUp from "./Components/SignUp"
import Login from "./Components/Login"
import "./App.css"
import Navbar from "./Components/Navbar"
import { useEffect, useState } from "react"
import { auth } from "./Firebase"
import Landing from "./Components/Landing"
import GMapComponents from "./Components/GMapComponents"
import AddaVehicle from "./Components/AddaVehicle"

function App() {

  const [isAuthenticate,setIsAuthenticate] = useState("");
  const[userName,setUserName] = useState("");
  const[currVehicle,setCurrVehicle] = useState("MP 20 pk 2032");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
      }else setUserName("");
      console.log(user)});
  },[]);

  const user = auth.currentUser;
  return (
    <div className="App">
      <Router>
        <Navbar currVehicle={currVehicle}/>
        <Routes>
          {/* <Route path="/" element={<HomePage Name={userName}/>}/> */}
          <Route path="/landing" element={<Landing/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/" element={!user ? <Login/>:<Landing/>}/>
          <Route path="/trackonmap" element={<GMapComponents currVehicle={currVehicle}/>}/>
          <Route path="/addvehicle" element={<AddaVehicle/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App
