import React, { useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import './CreateNewPost.css';
import { useNavigate } from 'react-router-dom';

function CreateNewPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [wordCount, setWordCount] = useState(0);
    const navigate = useNavigate();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
        setWordCount(e.target.value.split(' ').filter(word => word !== '').length);
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handlePreview = () => {
        navigate('/previewpost ', { state: { title, content, image } });
    };

    const handlePublish = () => {
        
        console.log("Publish clicked");
    };

    return (
        <div id='createNewPost-frame'>
            <form id="create_newPost">
                <div id="fieldgroup">
                    <div id='text-field'>
                        <input 
                            type="text" 
                            placeholder="Title" 
                            id="titleInput" 
                            autoFocus={true} 
                            value={title}
                            onChange={handleTitleChange}
                        />
                        <textarea 
                            id="writingInput" 
                            placeholder="Share your thoughts..." 
                            type='text' 
                            value={content}
                            onChange={handleContentChange}
                        />
                        <div id="word-count" style={{ fontSize: '14px' }}> Word count: {wordCount} </div>
                    </div>

                    <hr style={{ border: 'solid 1px', borderColor: 'whitesmoke', margin: '4px 10px' }}></hr>

                    <div id="image-preview">
                        <div id='for-post-image'>
                            <label htmlFor="imageInput" style={{display:'flex', alignItems:'center'}}>
                                <div style={{ backgroundColor: 'whitesmoke', margin: '10px 0px', padding: '10px', width: '40px', height: '40px', cursor: 'pointer', borderRadius:'6px' }}>
                                    <IoAddOutline size={20} style={{ cursor: 'pointer' }} />

                                    
                                </div>
                                <p style={{marginLeft:'10px', fontSize:'14px', cursor:'pointer'}}>Insert post image</p>
                            </label>
                            <input 
                                type="file" 
                                id="imageInput" 
                                style={{ display: 'none' }} 
                                onChange={handleImageChange}
                            />
                            <div id='image-frame'>
                                {image ? (
                                    <img src={image} alt='post-image' id='image-for-post' />
                                ) : (
                                    <div id="placeholder-frame">Image Preview</div>
                                )}
                            </div>
                        </div>

                        <div id='finish-post'>
                            <div id='finish-post-btn' onClick={handlePreview}><p>Preview Post</p></div>
                            <div id='finish-post-btn' onClick={handlePublish}><p>Publish Post</p></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateNewPost;
