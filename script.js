document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const degreeInput = document.getElementById("degree");
    const universityInput = document.getElementById("university");
    const gradYearInput = document.getElementById("grad-year");
    const jobTitleInput = document.getElementById("job-title");
    const companyInput = document.getElementById("company");
    const expYearInput = document.getElementById("exp-year");
    const skillInput = document.getElementById("skill");
    const skillList = document.getElementById("skill-list");
    const preview = document.getElementById("preview");
    const generateButton = document.getElementById("generate-resume");
    const addSkillButton = document.getElementById("add-skill");

    // Event listener for adding skills
    addSkillButton.addEventListener("click", function () {
        const skill = skillInput.value;
        if (skill) {
            const listItem = document.createElement("li");
            listItem.textContent = skill;
            skillList.appendChild(listItem);
            skillInput.value = "";
        }
    });

    // Event listener for generating the resume preview
    generateButton.addEventListener("click", function () {
        const resumeData = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            degree: degreeInput.value,
            university: universityInput.value,
            gradYear: gradYearInput.value,
            jobTitle: jobTitleInput.value,
            company: companyInput.value,
            expYear: expYearInput.value,
            skills: Array.from(skillList.children).map((li) => li.textContent),
        };

        // Create a formatted resume preview
        const formattedResume = `
            <h1>${resumeData.name}</h1>
            <p>Email: ${resumeData.email}</p>
            <p>Phone: ${resumeData.phone}</p>
            <h2>Education</h2>
            <p>${resumeData.degree}</p>
            <p>${resumeData.university}</p>
            <p>Graduation Year: ${resumeData.gradYear}</p>
            <h2>Work Experience</h2>
            <p>${resumeData.jobTitle} at ${resumeData.company}</p>
            <p>Year: ${resumeData.expYear}</p>
            <h2>Skills</h2>
            <ul>${resumeData.skills.map((skill) => `<li>${skill}</li>`).join("")}</ul>
        `;

        // Display the formatted resume preview
        preview.innerHTML = formattedResume;
    });
});
