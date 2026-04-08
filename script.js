const form = document.getElementById('profileForm');
const errorMsg = document.getElementById('error-message');

// Live update bonus
document.getElementById('fullName').addEventListener('input', (e) => {
    document.getElementById('cardName').textContent = e.target.value || "Your Name";
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Data Extraction
    const name = document.getElementById('fullName').value;
    const job = document.getElementById('jobTitle').value;
    const bio = document.getElementById('bio').value;
    const color = document.getElementById('avatarColor').value;
    const checkboxes = document.querySelectorAll('input[name="skills"]:checked');

    // Validation
    if (!name || !job) {
        errorMsg.style.display = 'block';
        return;
    }
    errorMsg.style.display = 'none';

    // Update Text & Style
    document.getElementById('cardName').textContent = name;
    document.getElementById('cardJob').textContent = job;
    document.getElementById('cardBio').textContent = bio;
    document.getElementById('cardAvatar').style.backgroundColor = color;

    // Dynamic Skill Tags (createElement/appendChild)
    const skillsContainer = document.getElementById('cardSkills');
    skillsContainer.innerHTML = ''; // Clear old tags
    
    checkboxes.forEach(cb => {
        const span = document.createElement('span');
        span.textContent = cb.value;
        skillsContainer.appendChild(span);
    });
});