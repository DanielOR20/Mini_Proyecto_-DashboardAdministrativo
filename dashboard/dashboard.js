// Esperamos a que el DOM esté completamente cargado para ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Validar si hay sesión activa
    if (localStorage.getItem('sesionActiva') !== 'true') {
        // Redirige correctamente al login saliendo de la carpeta dashboard
        window.location.href = '../login/index.html'; 
        return; // Detenemos la ejecución si no hay sesión
    }

    // 2. Mostrar el nombre del usuario en el sidebar
    const userNameSpan = document.getElementById('userName');
    if (userNameSpan) {
        // Usamos || 'Invitado' por si el usuario no existe en localStorage
        userNameSpan.textContent = localStorage.getItem('usuario') || 'Invitado';
    }

    // 3. Lógica para el botón de Cerrar Sesión
    const logoutBtn = document.getElementById('logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevenimos el comportamiento por defecto del enlace (#)
            localStorage.clear(); // Limpiamos el LocalStorage
            window.location.href = '../login/index.html'; // Redirigimos al login
        });
    }

    // 4. Mostrar totales leyendo arreglos del LocalStorage de forma segura
    const clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    const productos = JSON.parse(localStorage.getItem('productos') || '[]');

    const totalClientesEl = document.getElementById('totalClientes');
    const totalProductosEl = document.getElementById('totalProductos');

    if (totalClientesEl) {
        totalClientesEl.innerText = clientes.length;
    }

    if (totalProductosEl) {
        totalProductosEl.innerText = productos.length;
    }
});