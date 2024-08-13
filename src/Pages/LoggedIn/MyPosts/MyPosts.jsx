import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';


function MyPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "Posts"));
            const postsData = querySnapshot.docs.map(doc => doc.data());
            setPosts(postsData);
        };
        
        fetchPosts();
    }, []);

    return (
        <div id="myposts-frame" style={{}}>
            {posts.map((post, index) => (
                <div key={index} id="myposts-display" 
                    style=
                    {{ 
                        width:'80%'    ,
                        padding:'20px 10px',
                        marginBottom: '20px',
                        
                        borderRadius:'8px',
                        display:'flex',
                    
                        backgroundColor:'whitesmoke',

                        boxShadow: '0px 1px 8px rgba(14, 14, 13, 0.2)'
                    
                    }}>
                    
                        <div style=
                        {{
                            width:'70%',
                            margin:'0px 10px',
                        }}>
                            <h3>{post.title}</h3>
                        
                            <p>{post.content}</p>
                        </div>

                        <div>
                            {post.image && <img src={post.image} alt="Post" style={{ maxWidth: '100%', maxHeight: '200px' }} />}

                            <p>Edit Post</p>    
                        </div>

                    
                </div>
            ))}

        </div>
    );
}

export default MyPosts;
