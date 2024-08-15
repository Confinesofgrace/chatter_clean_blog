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
                    justifyContent:'center',
                    gap:'50px',

                }}>

                <div style={{width:'60%'}}>
                    <BlogList/>
                </div>

                <hr ></hr>

                <div style={{width:'25%'}}>
                    <Sidebar/>
                </div>

            </div>
        </div>
    )
};

export default DefaultUserFeed;