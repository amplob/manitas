let emailCount = 1000;

function toggleSkill(skillId) {
    const skillDiv = document.getElementById(skillId);
    skillDiv.classList.toggle('hidden');
}

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-es], [data-en]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        element.textContent = text;
    });

    document.documentElement.lang = lang;
}

function sendEmail() {
    emailCount++;
    const subject = `Question ${emailCount}`;
    const email = 'marcisyourhandyman@gmail.com';
    window.location.href = `mailto:${email}?subject=${subject}`;
}

// Initialize the page with Spanish language
setLanguage('es');
