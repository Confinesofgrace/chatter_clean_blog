import { NavLink } from "react-router-dom";
import Recommended from "../Recommended/Recommended";


function Sidebar () {
    return (
        <div> 

            <div style={{display:'flex', alignSelf:'center', width:'100%'}}>

                <Recommended/>
            </div>
            
            <div id="footer"style={{fontSize:'12px', display:'flex', justifyContent:'center', gap:'5%',}}>
                <p>Help</p>

                <NavLink to='/loggedin/about'>
                    <p style={{cursor:'pointer'}}>About</p>
                </NavLink>
                
                <p>Contact</p>
                
                <NavLink to='/loggedin/terms'>
                    <p>Terms</p>
                </NavLink>
                
            </div>
            
        </div>
    )
};

export default Sidebar;