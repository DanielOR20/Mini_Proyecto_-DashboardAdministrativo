document.addEventListener('DOMContentLoaded', () => {

    // 1. Validar si hay sesión activa
    if (localStorage.getItem('sesionActiva') !== 'true') {
        window.location.href = '../login/index.html';
        return;
    }

    // 2. Mostrar el nombre del usuario en el sidebar
    const userNameSpan = document.getElementById('userName');
    if (userNameSpan) {
        userNameSpan.textContent = localStorage.getItem('usuario') || 'Invitado';
    }

    // 3. Lógica para el botón de Cerrar Sesión
    const logoutBtn = document.getElementById('logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.clear();
            window.location.href = '../login/index.html';
        });
    }

    // 4. Mostrar totales leyendo arreglos del localStorage
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    const totalClientesEl = document.getElementById('totalClientes');
    const totalProductosEl = document.getElementById('totalProductos');

    if (totalClientesEl) {
        totalClientesEl.innerText = clientes.length;
    }

    if (totalProductosEl) {
        totalProductosEl.innerText = productos.length;
    }

    // 5. Renderizar Gráfico de Barras con Chart.js
    const ctx = document.getElementById('summaryChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Clientes', 'Productos'],
                datasets: [{
                    label: 'Cantidad Registrada',
                    data: [clientes.length, productos.length],
                    backgroundColor: [
                        'rgba(0, 242, 254, 0.6)',
                        'rgba(120, 119, 198, 0.6)'
                    ],
                    borderColor: [
                        '#00f2fe',
                        '#7877c6'
                    ],
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#ffffff',
                            font: { size: 14 }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#cbd5e1', stepSize: 1 },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    x: {
                        ticks: { color: '#cbd5e1' },
                        grid: { display: false }
                    }
                }
            }
        });
    }
});

const btnCerrarSesion = document.getElementById('btnCerrarSesion');


if (btnCerrarSesion) {
    btnCerrarSesion.addEventListener('click', () => {
        localStorage.removeItem('sesionActiva');
        localStorage.removeItem('usuario');
        window.location.href = '../login/index.html';
    }
)}

btnCerrarSesion.addEventListener('click', () => {
    localStorage.removeItem('sesionActiva');
    localStorage.removeItem('usuario');
    window.location.href = '../login/index.html';
})  