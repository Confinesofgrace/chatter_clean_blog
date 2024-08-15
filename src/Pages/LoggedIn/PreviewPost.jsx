import { NavLink, useLocation } from "react-router-dom";

function PreviewPost () {

    const location = useLocation();
    const { title, content, image } = location.state || {};


    return (
        <div id="previewpost-frame" style={{display:'flex', flexDirection:'column',alignItems:'center'}}>

            <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                <p>
                    Preview
                </p>
                <NavLink to='/createnewpost'state={{ title, content, image }}>
                    <div id='finish-post-btn'
                        style=
                        {{
                            position:'absolute',
                            top:'120px',
                            left: '40px',
                            padding: '10px 20px',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                            cursor: 'pointer',
                            zIndex: 1000
                        }}
                    
                    ><p>Back to draft</p></div>
                </NavLink>
                 
            </div>

            <div id="previewpost-disply" style={{ width:'60%', padding:'20px',}}>

                {image ? (
                        <img src={image} alt="Post" style={{ objectFit: 'cover', width: '100%', maxHeight: '200px' }} />
                    ) : (
                        <p>Image for your post</p>
                    )}


                <div id="title-preview" >
                    <h2 style={{fontSize:'50px'}}>{title || 'Title for your post'}</h2>
                </div>

                <div id="body-preview" >
                    <p style={{fontSize:'18px'}}>{content || 'Body of your post goes here'}</p>

                </div>

            
            </div>
            
            

        </div>
    )
};

export default PreviewPost;