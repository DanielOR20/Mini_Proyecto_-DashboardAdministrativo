document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formProveedor");
    const tabla = document.getElementById("tablaProveedores");

    let proveedores = JSON.parse(localStorage.getItem("proveedores")) || [];

    const renderTabla = () => {
        tabla.innerHTML = "";
        proveedores.forEach((prov, index) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${prov.nombre}</td>
                <td>${prov.email}</td>
                <td>${prov.telefono}</td>
                <td>
                    <button class="btn btn-danger" onclick="eliminarProveedor(${index})">Eliminar</button>
                </td>
            `;
            tabla.appendChild(tr);
        });
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nuevoProveedor = {
            nombre: document.getElementById("nombreProveedor").value,
            email: document.getElementById("emailProveedor").value,
            telefono: document.getElementById("telefonoProveedor").value
        };

        proveedores.push(nuevoProveedor);
        localStorage.setItem("proveedores", JSON.stringify(proveedores));
        
        form.reset();
        renderTabla();
    });

    window.eliminarProveedor = (index) => {
        proveedores.splice(index, 1);
        localStorage.setItem("proveedores", JSON.stringify(proveedores));
        renderTabla();
    };

    renderTabla();
});