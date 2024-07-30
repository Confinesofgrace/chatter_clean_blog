import { Link } from 'react-router-dom';
import Navbar1 from '../../Components/Navbar1';
import './Home.css';

function Home () {
    return (
        <div id="home-frame">
            

            <div id='hero'>
                
                <p style={{color:'black', fontSize:'80px', fontWeight:'700'}}>Get your Tech career running quickly...</p>
                <p style={{marginTop:'20px'}}>'Tech' is very broad, but we provide the resources to get you going in the right direction quickly. </p>    
            </div>

            <Link to= "signup">
                <button id='get-started'>Get Started</button>
            </Link>

        </div>
    )
};

export default Home;