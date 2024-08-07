import './Interests.css';

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

    return (
        <div id="interests-frame">
            <h3>Tell us more about you</h3>
            <div id="interests-list">
                {techFields.map((field, index) => (
                    <div key={index} id="interest-item">
                        {field}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Interests;
