document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profileForm');
    const nameInput = document.getElementById('fullName');
    const errorArea = document.getElementById('errorArea');

    nameInput.addEventListener('input', (e) => {
        document.getElementById('displayName').textContent = e.target.value || "Your Name";
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const job = document.getElementById('jobTitle').value.trim();
        const bio = document.getElementById('bio').value.trim();
        const color = document.getElementById('avatarColor').value;
        const selectedSkills = document.querySelectorAll('input[name="skills"]:checked');

        if (!name || !job) {
            errorArea.textContent = "Error: Name and Job Title are required!";
            return;
        }
        errorArea.textContent = "";

        document.getElementById('displayName').textContent = name;
        document.getElementById('displayJob').textContent = job;
        document.getElementById('displayBio').textContent = bio || "No bio provided.";
        document.getElementById('cardAvatar').style.backgroundColor = color;

        const tagsContainer = document.getElementById('skillsTags');
        tagsContainer.innerHTML = "";

        selectedSkills.forEach(skill => {
            const span = document.createElement('span');
            span.textContent = skill.value;
            tagsContainer.appendChild(span);
        });
    });


    
});