// Cambiar idioma a ingles
export function changeLanguage() {
    const checkbox = document.getElementById('language-toggle');
    const languageContainer = document.querySelector('.navbar__toggle--language');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // Redirect to the English page
            window.location.href = 'http://127.0.0.1:5500/indexIngles.html#home';
            // Aplicar la clase para la bandera del Reino Unido
            languageContainer.classList.add('english-flag-position');
        } else {
            // Redirect to the Spanish page
            window.location.href = 'http://127.0.0.1:5500/index.html#home';
            // Quitar la clase para la bandera del Reino Unido
            languageContainer.classList.remove('english-flag-position');
        }
    });
}
