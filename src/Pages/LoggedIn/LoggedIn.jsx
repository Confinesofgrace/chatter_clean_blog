import BlogList from '../../Components/UserFeed/BlogList';
import Sidebar from '../../Components/UserFeed/Sidebar';
import './LoggedIn.css';

function LoggedIn () {

    return (
        <div id='logged-in-frame'>

            <div id='logged-in-display'>

                <div style={{width:'60%'}}>
                    <BlogList/>
                </div>

                <div style={{width:'40%'}}>
                    <Sidebar/>
                </div>

            </div>

        </div>
    )
};

export default LoggedIn;