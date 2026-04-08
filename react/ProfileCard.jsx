import React from 'react';

const ProfileCard = ({ name, title, bio, color, skills }) => {
  return (
    <div className="card" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px' }}>
      <div 
        className="avatar" 
        style={{ backgroundColor: color, width: '60px', height: '60px', borderRadius: '50%' }}
      ></div>
      <h2>{name || "User Name"}</h2>
      <p><strong>{title || "Job Title"}</strong></p>
      <p>{bio}</p>
      <div className="skills-tags">
        {skills.map((skill, index) => (
          <span key={index} style={{ marginRight: '5px', background: '#f0f0f0', padding: '2px 5px' }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;