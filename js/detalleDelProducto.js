// Lista de productos (puedes tenerla en un archivo JSON o en localStorage)
const productos = [
    {
        id: 1,
        nombre: "Adidas Gazelle",
        precio: 100,
        descripcion: "Zapatilla de estilo clásico y cómodo.",
        categoria: "Zapatillas",
        imagen: "./asets/adidas_gazelle.jpg",
    },
    {
        id: 2,
        nombre: "Adidas Superstars",
        precio: 90,
        descripcion: "Zapatilla clásica con tres franjas laterales.",
        categoria: "Zapatillas",
        imagen: "./asets/adidas_superstars.jpg",
    },
    {
        id: 3,
        nombre: "Asics Gel-Lyte III",
        precio: 120,
        descripcion: "Zapatilla con diseño técnico y amortiguación de gel.",
        categoria: "Zapatillas",
        imagen: "./asets/asics_gel_lyte_iii.jpg",
    },
    {
        id: 4,
        nombre: "Converse Chuck Taylor All Star 1970",
        precio: 90,
        descripcion: "Zapatilla clásica de lona.",
        categoria: "Zapatillas",
        imagen: "./asets/converse_chuck_taylor.jpg",
    },
    {
        id: 5,
        nombre: "Nike Air Max 1 '86 OG",
        precio: 120,
        descripcion: "Zapatilla icónica con amortiguación visible.",
        categoria: "Zapatillas",
        imagen: "./asets/nike_air_max_1_86_og.jpg",
    },
    {
        id: 6,
        nombre: "Nike Air Max 90",
        precio: 110,
        descripcion: "Zapatilla deportiva con una gran amortiguación.",
        categoria: "Zapatillas",
        imagen: "./asets/nike_air_max_90.jpg",
    }
];

// Obtener el ID del producto desde la URL
const urlParams = new URLSearchParams(window.location.search);
const idProducto = parseInt(urlParams.get("id"));

// Buscar el producto correspondiente
const productoSeleccionado = productos.find(producto => producto.id === idProducto);

if (productoSeleccionado) {
    // Actualizar la página con los detalles del producto
    document.getElementById("nombre-producto").textContent = productoSeleccionado.nombre;
    document.getElementById("imagen-producto").src = productoSeleccionado.imagen;
    document.getElementById("descripcion-producto").textContent = productoSeleccionado.descripcion;
    document.getElementById("precio-producto").textContent = `USD $${productoSeleccionado.precio}`;
} else {
    // Si no se encuentra el producto, mostrar un mensaje de error
    document.getElementById("producto-detalles").innerHTML = "<p>Producto no encontrado.</p>";
}
