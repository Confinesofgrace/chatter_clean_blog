import { IoAddOutline } from 'react-icons/io5';
import './BlogList.css';
import { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import ArticlePreview from './ArticlePreview';
import MyPosts from '../../Pages/LoggedIn/MyPosts/MyPosts';

function BlogList() {
    const location = useLocation();
    const [activeFeed, setActiveFeed] = useState('forYou');
    const selectedInterests = location.state?.selectedInterests || [];

    const handleFeedClick = (feed) => {
        setActiveFeed(feed);
    };

    const handleForyouClick = () => {
        setActiveFeed('forYou');
    };

    const handleMyPostClick = () => {
        setActiveFeed('myPosts');
    };

    return (
        <div>
            <div id='userFeed-nav'>
                <NavLink to={'./interests'} state={{ selectedInterests }}>
                    <div id='feed'> <IoAddOutline size={20} /></div>
                </NavLink>
                
                <div id='feed' onClick={handleForyouClick}> For You</div>              
                <div id='feed' onClick={handleMyPostClick}> My Posts </div>
                
                {selectedInterests.map((interest, index) => (
                    <div key={index} id='feed'>
                        {interest}
                    </div>
                ))}
            </div>

            <div id='userfeed'>
                {activeFeed === 'forYou' && <ArticlePreview />}
                {activeFeed === 'myPosts' && <MyPosts />}
            </div>
        </div>
    );
}

export default BlogList;
