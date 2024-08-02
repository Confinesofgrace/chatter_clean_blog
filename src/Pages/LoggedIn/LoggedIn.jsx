import BlogList from '../../Components/UserFeed/BlogList';
import Sidebar from '../../Components/UserFeed/Sidebar';
import './LoggedIn.css';

function LoggedIn () {

    return (
        <div id='logged-in-frame'>

            <div id='logged-in-display'>

                <div style={{width:'50%'}}>
                    <BlogList/>
                </div>

                <div style={{width:'50%'}}>
                    <Sidebar/>
                </div>

                

            </div>

        </div>
    )
};

export default LoggedIn;