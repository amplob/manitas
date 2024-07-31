document.addEventListener('DOMContentLoaded', () => {
    let emailCounter = 1000;

    document.querySelectorAll('.skill p').forEach(skillText => {
        skillText.addEventListener('click', () => {
            const images = skillText.nextElementSibling;
            images.style.display = images.style.display === 'none' || !images.style.display ? 'block' : 'none';
        });
    });

    document.getElementById('contact-button').addEventListener('click', () => {
        const email = `mailto:marcisyourhandyman@gmail.com?subject=Question ${emailCounter++}`;
        window.location.href = email;
    });

    const translations = {
        es: {
            description: 'Soy un manitas en Barcelona, con más de 10 años de experiencia.',
            habilidades: 'Habilidades',
            contact: '¡No dudes en contactarme!'
        },
        en: {
            description: 'I am a handyman in Barcelona, with more than 10 years of experience.',
            habilidades: 'Skills',
            contact: 'Don\'t hesitate to contact me!'
        }
    };

    const translate = (lang) => {
        document.getElementById('description').innerText = translations[lang].description;
        document.querySelector('.skills h2').innerText = translations[lang].habilidades;
        document.querySelector('.contact p').innerText = translations[lang].contact;

        const skillTexts = {
            es: ['Instalaciones eléctricas', 'Instalaciones de filtros de agua', 'Instalaciones de aire acondicionado', 'Instalaciones de radiadores de agua'],
            en: ['Electrical installations', 'Water filters installations', 'Air conditioner installations', 'Water radiator installations']
        };
        document.querySelectorAll('.skill p').forEach((skillText, index) => {
            skillText.innerText = skillTexts[lang][index];
        });
    };

    document.getElementById('es-button').addEventListener('click', () => translate('es'));
    document.getElementById('en-button').addEventListener('click', () => translate('en'));
    
    // Set initial language
    translate('es');
});
