import { Link } from 'react-router-dom';
import './WithEmail.css';
import { useState } from 'react';

function WithEmail () {

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [confirmPassword, setConfirmPassword]= useState ('');

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword (auth, email, password)
        .then ((userCredential) => {
            const user = userCredential.user;
            console.log (user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log (errorCode, errorMessage);
        } )
    }

    return (
        <div id='withEmail-frame'>
            <div id='withEmail-display'>


                <form>
                    <h2>Sign Up with your Email</h2>

                    <div id='inputs'>
                        <input type='text' placeholder='Name'/>
                        <input type='email' placeholder='johnny@email.com'/>
                        <input type='password' placeholder='Password'/>
                    </div>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', }}>
                        <button id='form-btn' type='submit' onClick={onSubmit}
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

export default WithEmail;