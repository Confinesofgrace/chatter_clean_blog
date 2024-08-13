import { NavLink, useLocation } from "react-router-dom";


function ReadPost () {
    const location = useLocation();
    const { title, content, image } = location.state || {};


    return (
        <div id="previewpost-frame" style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
            

            <div id="title-preview" style={{ width:'60%', padding:'20px',}}>
                <h2 style={{fontSize:'50px'}}>{title || 'Title for your post'}</h2>
            </div>

            <div id="image-preview" style={{width:'60%', padding:'20px',}}>
            {image ? (
                    <img src={image} alt="Post" style={{ maxWidth: '100%', maxHeight: '400px' }} />
                ) : (
                    <p>Image for your post</p>
                )}

            </div>

            <div id="body-preview" style={{ width:'60%', padding:'20px',}}>
                <p style={{fontSize:'18px'}}>{content || 'Body of your post goes here'}</p>

            </div>

            

        </div>
    )
};

export default ReadPost;