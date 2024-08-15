import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Recommended () {

    const techFields = [
        'Mobile Development',
        'UI Design',
        'UX Design',
        'Project Management',
        'Cybersecurity',
        'Game Development',
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

    const handleSeeMoreTopics = () => {
        navigate('/loggedin/interests', { state: { selectedInterests } });
    };

    return (
        <div id="interests-frame">
            <h4 style={{ marginBottom: '16px' }}>Recommended Topics</h4>
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
                <div 
                    onClick={handleSeeMoreTopics}
                    style={{
                        color:'green',
                        marginTop: '20px',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.055)',
                        cursor: 'pointer',
                    }}>
                    <p>See more topics</p>
                </div>
            </div>
        </div>
    )
};

export default Recommended;