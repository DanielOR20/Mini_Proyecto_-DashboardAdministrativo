let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

// Validar sesión activa
if (localStorage.getItem('sesionActiva') !== 'true') {
    window.location.href = '../login/index.html';
}

function renderClientes() {
    const tbody = document.getElementById('tablaClientes');
    tbody.innerHTML = '';
    
    // Ciclo para recorrer el arreglo de objetos
    clientes.forEach((cliente, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${cliente.nombre}</td>
                <td>${cliente.email}</td>
                <td><button class="btn btn-danger" onclick="eliminarCliente(${index})">Eliminar</button></td>
            </tr>
        `;
    });
}

// Evento de formulario
document.getElementById('formCliente').addEventListener('submit', function(e) {
    e.preventDefault();
    const nuevoCliente = {
        nombre: document.getElementById('nombreCliente').value,
        email: document.getElementById('emailCliente').value
    };
    
    clientes.push(nuevoCliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    this.reset();
    renderClientes();
});

function eliminarCliente(index) {
    clientes.splice(index, 1); // Método de arreglo
    localStorage.setItem('clientes', JSON.stringify(clientes));
    renderClientes();
}

// Inicializar
renderClientes();