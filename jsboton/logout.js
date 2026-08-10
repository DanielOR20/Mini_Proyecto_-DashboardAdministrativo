document.getElementById('btnCerrarSesion').onclick = function () {
    localStorage.removeItem('sesionActiva');
    localStorage.removeItem('usuario');

    window.location.href = '../login/index.html';
};