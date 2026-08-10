let productos = JSON.parse(localStorage.getItem('productos')) || [];

function renderProductos() {
    const tbody = document.getElementById('tablaProductos');
    tbody.innerHTML = '';
    
    productos.forEach((producto, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td><button class="btn btn-danger" onclick="eliminarProducto(${index})">Eliminar</button></td>
            </tr>
        `;
    });
}

document.getElementById('formProducto').addEventListener('submit', function(e) {
    e.preventDefault();
    const nuevoProducto = {
        nombre: document.getElementById('nombreProducto').value,
        precio: document.getElementById('precioProducto').value
    };
    
    productos.push(nuevoProducto);
    localStorage.setItem('productos', JSON.stringify(productos));
    this.reset();
    renderProductos();
});

function eliminarProducto(index) {
    productos.splice(index, 1);
    localStorage.setItem('productos', JSON.stringify(productos));
    renderProductos();
}

renderProductos();