import React from 'react';

const ProfileCard = ({ name, title, bio, color, skills = [] }) => {
  return (
    <div className="card" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '12px' }}>
      <div 
        className="avatar" 
        style={{ backgroundColor: color || '#4a90e2', width: '80px', height: '80px', borderRadius: '50%' }}
      ></div>
      <h2>{name || "Your Name"}</h2>
      <p style={{ fontWeight: 'bold' }}>{title || "Job Title"}</p>
      <p>{bio || "Bio content..."}</p>
      <div className="skills-tags">
        {skills.map((skill, index) => (
          <span key={index} style={{ 
            display: 'inline-block', 
            background: '#eee', 
            padding: '4px 8px', 
            margin: '4px', 
            borderRadius: '4px' 
          }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;