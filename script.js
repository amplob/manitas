let emailCounter = 1000;

document.addEventListener('DOMContentLoaded', () => {
    // Toggle skill images
    document.querySelectorAll('.skill h3').forEach(skillHeader => {
        skillHeader.addEventListener('click', () => {
            const imagesDiv = skillHeader.nextElementSibling;
            imagesDiv.classList.toggle('hidden');
        });
    });

    // Language change functions
    function setLanguage(lang) {
        document.documentElement.lang = lang;
        if (lang === 'es') {
            document.querySelector('title').innerText = 'Marc Es Mi Manitas';
            document.getElementById('description').innerHTML = '¡Manitas en Barcelona! Con más de 10 años de experiencia, capaz de todo tipo de trabajos. <strong>Contáctame para una consulta y presupuesto GRATIS.</strong>';
            document.getElementById('contact').querySelector('p').innerText = '¡No dudes en contactarme!';
        } else if (lang === 'en') {
            document.querySelector('title').innerText = 'Marc Is My Handyman';
            document.getElementById('description').innerHTML = 'Handyman based in Barcelona! With more than 10 years of experience, capable of all kinds of work. <strong>Contact me for a FREE consultation and quote.</strong>';
            document.getElementById('contact').querySelector('p').innerText = 'Don\'t hesitate to contact me!';
        }
        // Update skills section
        document.querySelectorAll('[data-es]').forEach(element => {
            element.innerText = element.getAttribute(`data-${lang}`);
        });
    }

    // Change language to Spanish
    document.getElementById('es-btn').addEventListener('click', () => {
        setLanguage('es');
    });

    // Change language to English
    document.getElementById('en-btn').addEventListener('click', () => {
        setLanguage('en');
    });

    // Set initial language
    setLanguage('es');

    // Contact button functionality
    document.getElementById('contact-btn').addEventListener('click', () => {
        window.location.href = `mailto:marcisyourhandyman@gmail.com?subject=Question ${emailCounter++}`;
    });
});
