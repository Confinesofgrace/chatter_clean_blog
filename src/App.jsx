import { BrowserRouter as Router, Route,Routes} from "react-router-dom";

import './App.css'
import Navbar1 from './Components/Navbar1'
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import WithEmail from "./Pages/SignUp/WithEmail";
import LoginWithEmail from "./Pages/Login/LoginWithEmail";


function App() {

  return (
    <>
    <Router>
      <Navbar1/>

      <Routes>
        <Route exact path="/" element= {<Home/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/signup" element= {<SignUp/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/withemail" element= {<WithEmail/>}/>
        <Route path="/loginwithemail" element= {<LoginWithEmail/>}/>
      </Routes>

      
    </Router>

      
        
    </>
  )
}

export default App
