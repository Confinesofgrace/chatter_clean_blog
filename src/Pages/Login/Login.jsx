import { Link } from 'react-router-dom';
import './Login.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

function Login () {
    return (
        <div id='login-frame'>

            <div id='login-display'>

                <div style={{fontSize:'50px', marginBottom:'20px'}}><p>Join Chatter</p></div>
                
                <div id='login-type'>

                    <div id='rectangles'>
                        <div id='icons'>  <FaGoogle size={'20px'}/> </div>
                        <div id='proceed-with'>Log in with Google</div>

                    </div>

                    <div id='rectangles'>
                        <div id='icons'><FaFacebook size={'20px'}/></div>
                        <div id='proceed-with'>Log in with Facebook</div>

                    </div>

                    <div id='rectangles'>
                        
                        <Link to="/EmailForm" style= {{display:'flex'}}>
                            <div id='icons'><IoMail size={'20px'}/></div>
                            
                            <div id='proceed-with'>Log in with Email</div>
                        </Link>

                    </div>

                </div>
                
                <div id="logged-in">
                    <p style={{fontSize:'12px'}}>Don't have an account?</p>

                    <Link to='/signup'>
                        <b style={ {marginLeft: '10px', fontSize:'12px'} }>Sign Up</b>
                    </Link>
                    
                </div>

                <div style={{fontSize:'12px'}}>Terms and conditions apply.</div>
            
            </div>
        </div>
    )
};

export default Login;