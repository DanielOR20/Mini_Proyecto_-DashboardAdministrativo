document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logout");

    if (logoutButton) {
        logoutButton.addEventListener("click", function (e) {
            e.preventDefault();

            // Eliminar datos de sesión almacenados
            localStorage.removeItem("sesionActiva");
            localStorage.removeItem("usuario");

            // Redirigir al login (ajusta los puntos si tu login está en otra ruta)
            window.location.href = "../login/index.html";
        });
    }
});