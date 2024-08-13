class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto, cantidad) {
        for (let i = 0; i < cantidad; i++) {
            this.productos.push(producto);
        }
        this.mostrarCarrito();
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    mostrarCarrito() {
        let mensaje = "Productos en el carrito:\n";
        this.productos.forEach((producto, index) => {
            mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
        });
        alert(mensaje);
    }

    finalizarCompra() {
        alert('Total de la compra: $' + this.calcularTotal());
        this.productos = [];
    }
}

const productosDisponibles = [
    new Producto('Leche', 1000),
    new Producto('Pan de Molde', 2000),
    new Producto('Queso', 1200),
    new Producto('Mermelada', 890),
    new Producto('Azúcar', 1300),
];

const carrito = new Carrito();

function iniciarCompra() {
    do {
        let listaProductos = "Productos disponibles:\n";
        productosDisponibles.forEach((producto, index) => {
            listaProductos += `${index + 1}- ${producto.nombre} $${producto.precio}\n`;
        });

        alert(listaProductos);

        let productoSeleccionado = parseInt(prompt("Ingresa el número del producto que deseas agregar al carrito:")) - 1;
        let cantidad = parseInt(prompt("Ingresa la cantidad de unidades:"));

        if (productoSeleccionado >= 0 && productoSeleccionado < productosDisponibles.length) {
            carrito.agregarProducto(productosDisponibles[productoSeleccionado], cantidad);
            alert(`${cantidad} ${productosDisponibles[productoSeleccionado].nombre}(s) agregado(s) al carrito.`);
        } else {
            alert("Producto no válido.");
        }
    } while (confirm("¿Deseas seguir agregando productos? (s/n)"));

    carrito.finalizarCompra();
}

document.addEventListener('DOMContentLoaded', iniciarCompra);
