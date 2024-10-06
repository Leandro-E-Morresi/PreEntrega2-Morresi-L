// Inicializamos el total en 0
let totalCompra = 0;

// Función para agregar el precio del producto al total
function agregarProducto() {
    // Obtenemos el valor del campo de entrada
    let precioProducto = parseFloat(document.getElementById("producto").value);
    
    // Validamos que el precio sea un número positivo
    if (isNaN(precioProducto) || precioProducto <= 0) {
        document.getElementById("mensaje").textContent = "Por favor, introduce un precio válido.";
        return;
    }

    // Sumamos el precio al total
    totalCompra += precioProducto;

    // Actualizamos el total en la página
    document.getElementById("total").textContent = totalCompra.toFixed(2);
    
    // Limpiamos el campo de entrada
    document.getElementById("producto").value = "";

    // Mostramos un mensaje de confirmación
    document.getElementById("mensaje").textContent = "Producto agregado exitosamente.";
}
