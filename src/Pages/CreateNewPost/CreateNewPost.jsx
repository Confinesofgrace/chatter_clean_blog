import { IoAddOutline } from 'react-icons/io5';
import './CreateNewPost.css';

function CreateNewPost () {
    return (
        <div id='createNewPost-frame'>
            <form id="create_newPost">

                <div id="fieldgroup">
                    <label htmlFor="imageInput">
                        <IoAddOutline size={20} style={{cursor:'pointer'}}/>
                    </label>

                    <input type="file" id="imageInput" style={{display:'none'}} />

                    <input type="text" placeholder="Title" id="titleInput" autoFocus={true} />

                </div>

                <div id="fieldgroup">

                    <textarea
                        placeholder="Share your thoughts..."
                        type= 'text'
                        id="writingInput"></textarea>

                    <div id="word-count">Word count:</div>

                    <div id="publish">
                        <button
                            style=
                            {{
                            width: '20%',
                            margin: '20px 10px',
                            padding: '10px',
                            }}
                        
                        >Preview</button>

                        <button
                            style=
                            {{
                            width: '20%',
                            margin: '20px 10px',
                            padding: '10px',
                            }}
                        
                        >Publish</button>

                    </div>

                    
                
                </div>
                

            </form>

        </div>
    )
};

export default CreateNewPost;