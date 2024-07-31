document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll('.skill-title');
    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            const images = skill.nextElementSibling;
            images.style.display = images.style.display === 'block' ? 'none' : 'block';
        });
    });

    let emailCounter = 1000;
    const contactButton = document.getElementById('contact-button');
    contactButton.addEventListener('click', () => {
        window.location.href = `mailto:marcisyourhandyman@gmail.com?subject=Question ${emailCounter}`;
        emailCounter++;
    });

    const esBtn = document.getElementById('es-btn');
    const enBtn = document.getElementById('en-btn');

    esBtn.addEventListener('click', () => {
        document.documentElement.lang = 'es';
        document.getElementById('description').textContent = '¡Manitas en Barcelona con más de 10 años de experiencia! Capaz de todo tipo de trabajos. Contáctame para una consulta y presupuesto gratuitos.';
        document.querySelector('h2').textContent = 'Habilidades';
        document.querySelector('.contact h2').textContent = '¡No dudes en contactarme!';
    });

    enBtn.addEventListener('click', () => {
        document.documentElement.lang = 'en';
        document.getElementById('description').textContent = 'Handyman in Barcelona with more than 10 years of experience! Capable of all kinds of work. Contact me for a free consultation and budget.';
        document.querySelector('h2').textContent = 'Skills';
        document.querySelector('.contact h2').textContent = "Don't hesitate to contact me!";
    });
});
