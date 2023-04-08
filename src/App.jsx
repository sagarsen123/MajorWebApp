import HomePage from "./Components/HomePage"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import SignUp from "./Components/SignUp"
import Login from "./Components/Login"
import "./App.css"
import Navbar from "./Components/Navbar"
import { useEffect, useState } from "react"
import { auth } from "./Firebase"
import Landing from "./Components/Landing"
function App() {

  const [isAuthenticate,setIsAuthenticate] = useState("");
  const[userName,setUserName] = useState("");

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
      }else setUserName("");
      console.log(user)});
  },[]);
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          {/* <Route path="/" element={<HomePage Name={userName}/>}/> */}
          <Route path="/" element={<Landing/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App
