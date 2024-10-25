// Variables necesarias
let totalCompra = 0;  // Total acumulado de la compra
let productos = [];    // Array para almacenar objetos de productos

// Objeto para almacenar la información del producto
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// Función para agregar un producto
function agregarProducto() {
    // Captura de entrada
    const nombreProducto = prompt("Introduce el nombre del producto:");
    const precioProducto = parseFloat(prompt("Introduce el precio del producto:"));

    // Validación de entrada
    if (isNaN(precioProducto) || precioProducto <= 0 || !nombreProducto) {
        alert("Por favor, introduce un nombre y un precio válido mayor que cero.");
        return;
    }

    // Procesamiento: agregar producto a la lista
    const nuevoProducto = new Producto(nombreProducto, precioProducto);
    productos.push(nuevoProducto);
    totalCompra += precioProducto; // Actualiza el total

    // Actualiza el total en la página
    document.getElementById("total").textContent = totalCompra.toFixed(2);

    alert(`Producto agregado: ${nombreProducto} - $${precioProducto.toFixed(2)}`);
    alert(`Total acumulado: $${totalCompra.toFixed(2)}`);
}

// Función para aplicar un descuento
function aplicarDescuento() {
    const porcentajeDescuento = parseFloat(prompt("Introduce el porcentaje de descuento (0-100):"));

    if (isNaN(porcentajeDescuento) || porcentajeDescuento < 0 || porcentajeDescuento > 100) {
        alert("Por favor, introduce un porcentaje de descuento válido.");
        return;
    }

    const montoDescuento = (totalCompra * porcentajeDescuento) / 100;
    totalCompra -= montoDescuento;

    // Actualiza el total en la página
    document.getElementById("total").textContent = totalCompra.toFixed(2);

    alert(`Descuento aplicado: $${montoDescuento.toFixed(2)}`);
    alert(`Total después del descuento: $${totalCompra.toFixed(2)}`);
}

// Función para calcular el impuesto
function calcularImpuesto() {
    const porcentajeImpuesto = parseFloat(prompt("Introduce el porcentaje de impuesto (0-100):"));

    if (isNaN(porcentajeImpuesto) || porcentajeImpuesto < 0 || porcentajeImpuesto > 100) {
        alert("Por favor, introduce un porcentaje de impuesto válido.");
        return;
    }

    const montoImpuesto = (totalCompra * porcentajeImpuesto) / 100;
    totalCompra += montoImpuesto;

    // Actualiza el total en la página
    document.getElementById("total").textContent = totalCompra.toFixed(2);

    alert(`Impuesto aplicado: $${montoImpuesto.toFixed(2)}`);
    alert(`Total después del impuesto: $${totalCompra.toFixed(2)}`);
}

// Método para buscar un producto por nombre
function buscarProducto() {
    const nombreBuscar = prompt("Introduce el nombre del producto a buscar:");
    const productoEncontrado = productos.find(producto => producto.nombre.toLowerCase() === nombreBuscar.toLowerCase());

    if (productoEncontrado) {
        alert(`Producto encontrado: ${productoEncontrado.nombre} - $${productoEncontrado.precio.toFixed(2)}`);
    } else {
        alert("Producto no encontrado.");
    }
}

// Función principal para ejecutar el simulador
function ejecutarSimulador() {
    let opcion;

    do {
        opcion = prompt("Simulador de Compras\n\n1. Agregar producto\n2. Aplicar descuento\n3. Calcular impuesto\n4. Buscar producto\n5. Mostrar total\n6. Salir\n\nElige una opción:");

        switch (opcion) {
            case "1":
                agregarProducto();
                break;
            case "2":
                aplicarDescuento();
                break;
            case "3":
                calcularImpuesto();
                break;
            case "4":
                buscarProducto();
                break;
            case "5":
                alert(`Total de la compra: $${totalCompra.toFixed(2)}`);
                break;
            case "6":
                alert("Gracias por usar el Simulador de Compras.");
                break;
            default:
                alert("Por favor, elige una opción válida.");
        }
    } while (opcion !== "6");
}






