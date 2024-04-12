// Cambiar idioma a ingles
export function changeLanguage() {
    const checkbox = document.getElementById('language-toggle');
    const languageCurrent = window.location.href.includes('indexIngles.html')
    checkbox.checked = languageCurrent

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            // Redirect to the English page
            window.location.href = 'indexIngles.html';
          
        } else {
            // Redirect to the Spanish page
            window.location.href = 'index.html';
      
        }
    });
}
