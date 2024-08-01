import { Link, useNavigate } from 'react-router-dom';
import './LoginWithEmail.css';
import { useState } from 'react';
import { auth,app } from '../Firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function LoginWithEmail () {

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    const login = (e) => {
        e.preventDefault()
        
         signInWithEmailAndPassword (auth, email, password)
        .then ((userCredential) => {
            //const user = userCredential.user;
            afterLogin('/loggedin');

            console.log(userCredential)
        })
        .catch((error) => {
            //const errorCode = error.code;
            //const errorMessage = error.message;
            console.log(error)
        } );
    }

    const afterLogin = useNavigate();

    
    return (
        <div id='LoginWithEmail-frame'>

            <div id='LoginWithEmail-dispaly'>

                <form onSubmit={login}>
                    <h2>Log in with your Email</h2>

                    <div id='inputs'>
                        <input 
                            type='email'  
                            placeholder='johnny@email.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />


                        <input 
                            type='password' 
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
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
                        > Log In</button>
                    </div>

                    <div style={{ display: 'flex', justifyContent:'center', fontSize: '12px', margin: '10px 0px' }}>
                        <p>Don't have an account?</p>
                        <Link to='/signup'>
                            <b style={{ marginLeft: '10px' }}>Sign Up</b>
                        </Link>
                    </div>
                    
                    
                </form>

            </div>

        </div>
    )
};

export default LoginWithEmail;