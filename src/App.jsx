import { BrowserRouter as Router, Route,Routes} from "react-router-dom";

import './App.css'
import Navbar1 from './Components/Navbar1'
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";


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
      </Routes>

      
    </Router>

      
        
    </>
  )
}

export default App
