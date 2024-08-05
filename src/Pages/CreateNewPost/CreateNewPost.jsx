import { IoAddOutline } from 'react-icons/io5';
import './CreateNewPost.css';

function CreateNewPost () {
    return (
        <div id='createNewPost-frame'>

            <form id="create_newPost">

                <div id="fieldgroup">

                    <div id='text-field'>
                        <input type="text" placeholder="Title" id="titleInput" autoFocus={true} />

                        <textarea id="writingInput" placeholder="Share your thoughts..." type= 'text'></textarea>

                        <div id="word-count" style={{fontSize:'14px'}}> Word count: </div>

                    </div>

                    <hr style={{ border:'solid 1px', borderColor:'whitesmoke',margin:'4px 10px'}}></hr>

                    <div id="image-preview">

                        
                        <div id='for-post-image'>

                            <label htmlFor="imageInput">
                                <IoAddOutline size={20} style={{cursor:'pointer'}}/>
                            </label>

                            <input type="file" id="imageInput" style={{display:'none'}} />

                            <img src='src\assets\pexels-veeterzy-303383.jpg' alt='post-image' id='image-for-post'/>
                        </div>

                        <div id='finish-post'>
                            <div id='finish-post-btn'><p>Preview</p></div> 

                            <div id='finish-post-btn'><p>Publish</p></div> 
                        </div>
                        

                        


                    </div>

                </div>
                

            </form>

        </div>
    )
};

export default CreateNewPost;