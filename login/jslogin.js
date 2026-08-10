document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Variables y obtención de valores del DOM
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Objeto con credenciales válidas (simulación de base de datos)
    const credenciales = {
        usuario: 'admin',
        clave: '12345'
    };

    // Estructura condicional para validar
    if (user === credenciales.usuario && pass === credenciales.clave) {
        // Uso de LocalStorage para guardar sesión
        localStorage.setItem('sesionActiva', 'true');
        localStorage.setItem('usuario', user);
        
        // CORRECCIÓN: Salimos de la carpeta login/ y entramos a dashboard/dashboard.html
        window.location.href = '../dashboard/dashboard.html';
    } else {
        errorMsg.style.display = 'block';
    }
});