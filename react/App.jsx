import React, { useState } from 'react';
import ProfileCard from './ProfileCard';

const ProfileBuilderApp = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    bio: '',
    color: '#4a90e2',
    skills: []
  });

  const handleSkillChange = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill) 
        ? prev.skills.filter(s => s !== skill) 
        : [...prev.skills, skill]
    }));
  };

  return (
    <div style={{ display: 'flex', gap: '40px', padding: '20px' }}>
      <form>
        <input 
          placeholder="Name" 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
        />
        {/* ... other inputs ... */}
      </form>

      {/* Passing state as props */}
      <ProfileCard {...formData} />
    </div>
  );
};