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
import CreateNewPost from "./Pages/CreateNewPost/CreateNewPost";
import Settings from "./Pages/LoggedIn/Settings/Settings";
import DefaultUserFeed from "./Pages/LoggedIn/UserFeed/DefaultUserFeed";
import Interests from "./Components/Interests/Interests";
import PreviewPost from "./Pages/LoggedIn/PreviewPost";
import { useState } from "react";
import SignUpWithGoogle from "./Pages/SignUp/SignUpWithGoogle";
import ReadPost from "./Pages/LoggedIn/ReadPost/ReadPost";
import MyPosts from "./Pages/LoggedIn/MyPosts/MyPosts";


function App() {

  //const [isAuth, setIsAuth] = useState (false); 

  // testing Google signup
  //<Route path="/signupwithgoogle" element= {<SignUpWithGoogle setIsAuth={setIsAuth}/>}/>


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
        <Route path="/loggedin/*" element= {<LoggedIn/>}/>
        <Route path="/defaultuserfeed" element= {<DefaultUserFeed/>}/>
        <Route path="/bloglist" element= {<BlogList/>}/>
        <Route path="/sidebar" element= {<Sidebar/>}/>
        <Route path="/createnewpost" element= {<CreateNewPost/>}/>
        <Route path="/settings" element= {<Settings/>}/>
        <Route path="/interests" element= {<Interests/>}/>
        <Route path="/previewpost" element= {<PreviewPost/>}/>
        
        <Route path="/readpost" element= {<ReadPost/>}/>
        <Route path="/myposts" element= {<MyPosts/>}/>



        
      </Routes>

      
    </Router>

      
        
    </>
  )
}

export default App
