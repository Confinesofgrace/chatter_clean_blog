import { Link } from 'react-router-dom';
import './LoginWithEmail.css';

function LoginWithEmail () {

    
    return (
        <div id='LoginWithEmail-frame'>

            <div id='LoginWithEmail-dispaly'>

                <form>
                    <h2>Log in with your Email</h2>

                    <div id='inputs'>
                        <input type='email' placeholder='johnny@email.com'/>
                        <input type='password' placeholder='Password'/>
                    </div>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', }}>
                        <button id='form-btn' type='submit' 
                        style=
                        {
                            {
                                width:'100%',
                                padding: '8px',
                                borderStyle: 'none',
                                border: 'solid 1px',
                                borderColor: 'rgba(223, 95, 240, 0.493)',
                                borderRadius: '10px',
                            }
                        }
                        > Sign Up</button>
                    </div>

                    <div style={{ display: 'flex', justifyContent:'center', fontSize: '12px', margin: '10px 0px' }}>
                        <p>Already have an account?</p>
                        <Link to='/login'>
                            <b style={{ marginLeft: '10px' }}>Log In</b>
                        </Link>
                    </div>
                    
                    
                </form>

            </div>

        </div>
    )
};

export default LoginWithEmail;