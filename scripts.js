document.getElementById('toggle-language').addEventListener('click', function() {
    const name = document.getElementById('name');
    const location = document.getElementById('location');
    const vehicle = document.getElementById('vehicle');
    const skillsTitle = document.getElementById('skills-title');
    const skills = document.getElementById('skills');
    const button = document.getElementById('toggle-language');

    if (button.textContent === 'Cambiar a Español') {
        name.textContent = 'Juan Pérez';
        location.textContent = 'Ubicado en Barcelona';
        vehicle.textContent = 'Con vehículo propio';
        skillsTitle.textContent = 'Habilidades:';
        skills.innerHTML = `
            <li>Capaz de instalar aire acondicionado</li>
            <li>Capaz de instalar filtros de agua por ósmosis</li>
            <li>Capaz de realizar instalaciones eléctricas</li>
        `;
        button.textContent = 'Change to English';
    } else {
        name.textContent = 'John Doe';
        location.textContent = 'Based in Barcelona';
        vehicle.textContent = 'With own vehicle';
        skillsTitle.textContent = 'Skills:';
        skills.innerHTML = `
            <li>Capable of installing air conditioners</li>
            <li>Capable of installing osmosis water filters</li>
            <li>Capable of electrical installations</li>
        `;
        button.textContent = 'Cambiar a Español';
    }
});