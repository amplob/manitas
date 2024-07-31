document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            const imagesDiv = skill.querySelector('.skill-images');
            imagesDiv.style.display = imagesDiv.style.display === 'block' ? 'none' : 'block';
        });
    });

    document.getElementById('contact-btn').addEventListener('click', () => {
        window.location.href = 'mailto:marcisyourhandyman@gmail.com';
    });

    const spanishText = {
        description: 'Handyman con sede en Barcelona, con más de 10 años de experiencia.',
        habilidades: 'Habilidades',
        contactText: 'No dudes en contactarme',
        skillTexts: [
            'Instalaciones eléctricas',
            'Instalación de filtros de agua',
            'Instalaciones de aire acondicionado',
            'Instalación y eliminación de radiadores de agua',
            'Instalación y eliminación de fregaderos y desagües'
        ]
    };

    const englishText = {
        description: 'Handyman based in Barcelona, with more than 10 years of experience.',
        habilidades: 'Skills',
        contactText: "Don't hesitate to contact",
        skillTexts: [
            'Electrical installations',
            'Water filter installations',
            'Air conditioner installations',
            'Water radiator installation and removal',
            'Sink and drains installation and removal'
        ]
    };

    const updateLanguage = (lang) => {
        const description = document.getElementById('description');
        const skillsHeader = document.querySelector('.skills h2');
        const contactText = document.querySelector('.contact p');
        const skillElements = document.querySelectorAll('.skill p');

        if (lang === 'es') {
            description.textContent = spanishText.description;
            skillsHeader.textContent = spanishText.habilidades;
            contactText.textContent = spanishText.contactText;
            skillElements.forEach((skill, index) => {
                skill.textContent = spanishText.skillTexts[index];
            });
        } else {
            description.textContent = englishText.description;
            skillsHeader.textContent = englishText.habilidades;
            contactText.textContent = englishText.contactText;
            skillElements.forEach((skill, index) => {
                skill.textContent = englishText.skillTexts[index];
            });
        }
    };

    document.getElementById('spanish-btn').addEventListener('click', () => updateLanguage('es'));
    document.getElementById('english-btn').addEventListener('click', () => updateLanguage('en'));

    // Set initial language to Spanish
    updateLanguage('es');
});
