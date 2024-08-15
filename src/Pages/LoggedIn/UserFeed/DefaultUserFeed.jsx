import BlogList from '../../../Components/UserFeed/BlogList';
import Sidebar from '../../../Components/UserFeed/Sidebar';
import './DefaultUserFeed.css';

function DefaultUserFeed () {
    return(
        <div>
            <div id='logged-in-display' 
            style=
                {{
                    width: '100%',
                    display: 'flex',

                }}>

                <div style={{width:'80%'}}>
                    <BlogList/>
                </div>

                <div style={{width:'20%'}}>
                    <Sidebar/>
                </div>

            </div>
        </div>
    )
};

export default DefaultUserFeed;