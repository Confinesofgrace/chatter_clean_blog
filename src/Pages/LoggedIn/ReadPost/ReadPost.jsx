import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { db } from '../../Firebase/Firebase';
import { doc, deleteDoc } from 'firebase/firestore';

function ReadPost() {
    const location = useLocation();
    const navigate = useNavigate();
    const { id, title, content, image } = location.state || {};

    const handleDelete = async () => {
        if (id) {
            await deleteDoc(doc(db, "Posts", id));
            navigate('/loggedin/myposts', { state: { deletedPostId: id } });
        }
    };

    return (
        <div id='readpost-frame' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div id='readpost-display' style={{ width: '60%', padding: '20px' }}>
                {image && <img src={image} alt="Post" id='post-image' style={{ objectFit: 'cover', width: '100%', maxHeight: '200px' }} />}
                <h2 style={{ fontSize: '50px' }}>{title}</h2>
                <p>{content}</p>

                <div id='readpost-nav' style={{ width: '100%', margin: '20px 0px', display: 'flex', justifyContent: 'center', gap: '70px' }}>
                    <NavLink to='/createnewpost' state={{ id, title, content, image }}>
                        <div id='readpost-btn'
                            style={{
                                padding: '10px 20px',
                                borderRadius: '8px',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                cursor: 'pointer',
                            }}>
                            <p>Edit Post</p>
                        </div>
                    </NavLink>

                    <div id='readpost-btn' onClick={handleDelete}
                        style={{
                            padding: '10px 20px',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                            cursor: 'pointer',
                        }}>
                        <p>Delete Post</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReadPost;
