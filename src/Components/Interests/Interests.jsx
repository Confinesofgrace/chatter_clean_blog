import React, { useState } from 'react';
import './Interests.css';
import { useNavigate } from 'react-router-dom';

function Interests() {
    const techFields = [
        'Artificial Intelligence',
        'Machine Learning',
        'Web Development',
        'Mobile Development',
        'UI Design',
        'UX Design',
        'FrontEnd Engineering',
        'BackEnd Engineering',
        'Project Management',
        'Data Science',
        'Cybersecurity',
        'Blockchain',
        'Internet of Things (IoT)',
        'Cloud Computing',
        'Augmented Reality (AR)',
        'Virtual Reality (VR)',
        'DevOps',
        'Game Development',
        'Robotics',
        'Big Data',
        'Graphic Design',
        'Software Engineering',
        'Quantum Computing'
    ];

    const [selectedInterests, setSelectedInterests] = useState([]);
    const navigate = useNavigate();

    const handleInterestClick = (interest) => {
        setSelectedInterests((prevSelectedInterests) => {
            if (prevSelectedInterests.includes(interest)) {
                return prevSelectedInterests.filter(item => item !== interest);
            } else {
                return [...prevSelectedInterests, interest];
            }
        });
    };

    const handleBackToFeed = () => {
        navigate('/loggedin', { state: { selectedInterests } });
    };

    return (
        <div id="interests-frame">
            <h3 style={{ marginBottom: '16px' }}>Tell us more about you</h3>
            <div id="interests-list">
                {techFields.map((field, index) => (
                    <div 
                        key={index} 
                        id="interest-item" 
                        onClick={() => handleInterestClick(field)}
                        style={{
                            backgroundColor: selectedInterests.includes(field) ? '#d3f8d3' : '',
                            cursor: 'pointer',
                            padding: '10px',
                            borderRadius: '5px',
                            margin: '5px'
                        }}
                    >
                        {field}
                    </div>
                ))}
            </div>
            
            {selectedInterests.length > 0 && (
                <div id="selected-interests" style={{ marginTop: '20px' }}>
                    <h4>Your Interests:</h4>
                    <ul style={{ display:'flex', justifyContent:'center',gap:'20px',alignSelf:'center', listStyle:'none', marginTop:'10px'}}>
                        {selectedInterests.map((interest, index) => (
                            <li key={index}>{interest}</li>
                        ))}
                    </ul>
                </div>
            )}

            <div style={{display:'flex', justifyContent:'center'}}>
                <div id='finish-post-btn'
                    onClick={handleBackToFeed}
                    style={{
                        width: '120px',
                        marginTop: '20px',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        cursor: 'pointer',
                    }}>
                    <p>Back to Feed</p>
                </div>
            </div>
        </div>
    );
}

export default Interests;
