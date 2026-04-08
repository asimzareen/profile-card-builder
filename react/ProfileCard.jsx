import React from 'react';

/**
 * ProfileCard Component
 * @param {Object} props - name, title, bio, color, skills (array)
 */
const ProfileCard = ({ name, title, bio, color, skills = [] }) => {
    return (
        <div className="card" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '12px' }}>
            <div 
                className="avatar" 
                style={{ 
                    backgroundColor: color || '#ddd', 
                    width: '80px', height: '80px', borderRadius: '50%' 
                }}
            ></div>
            
            <h2 style={{ margin: '10px 0' }}>{name || "Candidate Name"}</h2>
            <p style={{ fontWeight: 'bold', color: '#555' }}>{title || "Job Title"}</p>
            <p style={{ fontSize: '14px', margin: '10px 0' }}>{bio || "Biography goes here..."}</p>
            
            <div className="tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills.map((skill, index) => (
                    <span 
                        key={index} 
                        style={{ 
                            background: '#eef2f7', padding: '4px 12px', 
                            borderRadius: '15px', fontSize: '12px' 
                        }}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProfileCard;