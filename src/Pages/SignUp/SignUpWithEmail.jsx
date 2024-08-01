import { Link } from 'react-router-dom';
import './SignUpWithEmail.css';
import { useState } from 'react';
import { auth,app } from '../Firebase/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


function SignUpWithEmail () {

    const [name, setName] = useState ('');
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    //const [confirmPassword, setConfirmPassword]= useState ('');

    const signup = (e) => {
        e.preventDefault()
        
         createUserWithEmailAndPassword (auth, email, password)
        .then ((userCredential) => {
            //const user = userCredential.user;
            console.log(userCredential)
        })
        .catch((error) => {
            //const errorCode = error.code;
            //const errorMessage = error.message;
            console.log(error)
        } );
    }


    return (
        <div id='withEmail-frame'>
            <div id='withEmail-display'>


                <form onSubmit={signup}>
                    <h2>Sign Up with your Email</h2>

                    <div id='inputs'>
                        <input 
                            type='text' 
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

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

export default SignUpWithEmail;