import { IoAddOutline } from 'react-icons/io5';
import './BlogList.css';
import { useState } from 'react';
import ArticlePreview from './ArticlePreview';

function BlogList () {

    const [activeFeed, setActiveFeed] = useState('');

    const handleFeedClick = (feed) => {
    setActiveFeed(feed);
    };

    return  (
        <div>
            
            <div id='userFeed-nav'>

                <div id='feed'> <IoAddOutline size={20}/></div>
                <div id='feed'> For You</div>              

            </div>

            <div>
                <ArticlePreview/>
            </div>

        </div>
    )
};

export default BlogList;