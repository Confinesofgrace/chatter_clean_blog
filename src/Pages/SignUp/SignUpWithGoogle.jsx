import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../Firebase/Firebase';
import './SignUpWithGoogle.css';

function SignUpWithGoogle ({setIsAuth}) {

    const signUpWithGoogle = () => {

        signInWithPopup (auth, provider).then ( (result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true)
        }
        );
    };
    

    return (
        <div>
            Sign Up With Google

            <button onClick={signUpWithGoogle}>Sign up with Google</button>
        </div>
    )
};

export default SignUpWithGoogle;