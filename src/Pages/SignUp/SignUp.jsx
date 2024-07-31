import { Link } from 'react-router-dom';
import './SignUp.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

function SignUp () {
    return (
        <div id='signup-frame'>

            <div id='signup-display'>

                <div style={{fontSize:'50px', marginBottom:'20px'}}><p>Join Chatter</p></div>
                
                <div id='signUp-type'>

                    <div id='rectangles'>
                        <div id='icons'>  <FaGoogle size={'20px'}/> </div>
                        <div id='proceed-with'>Sign up with Google</div>

                    </div>

                    <div id='rectangles'>
                        <div id='icons'><FaFacebook size={'20px'}/></div>
                        <div id='proceed-with'>Sign up with Facebook</div>

                    </div>

                    <div id='rectangles'>
                        
                        <Link to="/EmailForm" style= {{display:'flex'}}>
                            <div id='icons'><IoMail size={'20px'}/></div>
                            
                            <div id='proceed-with'>Sign up with Email</div>
                        </Link>

                    </div>

                </div>
                
                <div id="signed-up">
                    <p style={{fontSize:'12px'}}>Already have an account?</p>

                    <Link to='/login'>
                        <b style={ {marginLeft: '10px', fontSize:'12px'} }>Log In</b>
                    </Link>
                    
                </div>

                <div style={{fontSize:'12px'}}>Terms and conditions apply.</div>
            
            </div>
        </div>
    )
};

export default SignUp;