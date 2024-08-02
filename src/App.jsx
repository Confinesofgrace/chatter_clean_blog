import { BrowserRouter as Router, Route,Routes} from "react-router-dom";

import './App.css'
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import LoginWithEmail from "./Pages/Login/LoginWithEmail";
import SignUpWithEmail from "./Pages/SignUp/SignUpWithEmail";
import LoggedIn from "./Pages/LoggedIn/LoggedIn";
import BlogList from "./Components/UserFeed/BlogList";
import Sidebar from "./Components/UserFeed/Sidebar";




function App() {


  return (
    <>
    <Router>
      <Navbar/>

      <Routes>
        <Route exact path="/" element= {<Home/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/signup" element= {<SignUp/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/signupwithemail" element= {<SignUpWithEmail/>}/>
        <Route path="/loginwithemail" element= {<LoginWithEmail/>}/>
        <Route path="/loggedin" element= {<LoggedIn/>}/>
        <Route path="/bloglist" element= {<BlogList/>}/>
        <Route path="/sidebar" element= {<Sidebar/>}/>
        
      </Routes>

      
    </Router>

      
        
    </>
  )
}

export default App
