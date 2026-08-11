document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Función para aplicar el tema
    const setTheme = (isDark) => {
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('darkMode', 'enabled');
            if (darkModeToggle) darkModeToggle.textContent = '☀️';
        } else {
            document.documentElement.removeAttribute('data-theme');
            document.body.removeAttribute('data-theme');
            localStorage.setItem('darkMode', 'disabled');
            if (darkModeToggle) darkModeToggle.textContent = '🌙';
        }
    };

    // Cargar preferencia guardada al iniciar
    if (localStorage.getItem('darkMode') === 'enabled') {
        setTheme(true);
    }

    // Escuchar clic en el botón
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const isCurrentlyDark = document.documentElement.getAttribute('data-theme') === 'dark';
            setTheme(!isCurrentlyDark);
        });
    }
});