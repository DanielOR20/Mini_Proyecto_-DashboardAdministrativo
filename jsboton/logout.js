document.addEventListener("DOMContentLoaded", function () {

    const logoutButton = document.getElementById("logout");

    if (logoutButton) {

        logoutButton.addEventListener("click", function (e) {

            e.preventDefault();

            // Eliminar datos de sesión
            localStorage.removeItem("sesionActiva");
            localStorage.removeItem("usuario");

            // Regresar al login
            window.location.href = "../login/index.html";

        });

    }

});