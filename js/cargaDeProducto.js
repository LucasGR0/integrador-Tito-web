// Array de productos iniciales, se guarda en localStorage si no existen ya.
let productos = JSON.parse(localStorage.getItem("productos")) || [
    {
        id: 1,
        nombre: "Adidas Gazelle",
        precio: 100,
        descripcion: "Zapatilla de estilo clásico y cómodo.",
        categoria: "Zapatillas",
        imagen: "https://assets.adidas.com/images/w_600,f_auto,q_auto/73dc640ae7f04e30ae4eaebe013eb1b9_9366/Zapatillas_Gazelle_Indoor_Negro_H06259_01_standard.jpg",
    },
    {
        id: 2,
        nombre: "Adidas Superstars",
        precio: 90,
        descripcion: "Zapatilla clásica con tres franjas laterales.",
        categoria: "Zapatillas",
        imagen: "https://woker.vtexassets.com/arquivos/ids/194817/EG4958_FTW_photo_top-portrait_7white.jpg?v=637516849419870000",
    },
    {
        id: 3,
        nombre: "Asics Gel-Lyte III",
        precio: 120,
        descripcion: "Zapatilla con diseño técnico y amortiguación de gel.",
        categoria: "Zapatillas",
        imagen: "https://i.ytimg.com/vi/aU2ADpWa6sE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAWRyLs9XHVlYQeP9T08f6E8XgzJg",
    },
    {
        id: 4,
        nombre: "Converse Chuck Taylor All Star 1970",
        precio: 90,
        descripcion: "Zapatilla clásica de lona.",
        categoria: "Zapatillas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9sOYGAyPzmf-d6nRIsrFNOWYOiWe_mV5uA&s",
    },
    {
        id: 5,
        nombre: "Nike Air Max 1 ’86 OG",
        precio: 120,
        descripcion: "Zapatilla icónica con amortiguación visible.",
        categoria: "Zapatillas",
        imagen: "https://pbs.twimg.com/media/F7dAOMFXsAAYRCz.jpg:large",
    },
    {
        id: 6,
        nombre: "Nike Air Max 90",
        precio: 120,
        descripcion: "Zapatilla clásica con una gran comodidad y estilo.",
        categoria: "Zapatillas",
        imagen: "https://acdn.mitiendanube.com/stores/001/150/754/products/img-20240424-wa0050-b3667ad31d84862ee617139947989851-1024-1024.jpg",
    }
];

// Guardar productos en localStorage
function guardarProductos() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

// Verificar si los productos están guardados en localStorage; si no, los guarda.
if (!localStorage.getItem("productos")) {
    guardarProductos();
}

// Función para renderizar productos en la tabla de administración
function renderizarTablaProductos() {
    const tbody = document.getElementById("product-table-body");
    if (!tbody) return; // Asegura que el contenedor de la tabla existe

    tbody.innerHTML = ''; // Limpia el contenido anterior

    productos.forEach((producto) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" style="width: 50px; height: 50px;"></td>
            <td>$${producto.precio}</td>
            <td>${producto.categoria}</td>
            <td><button class="eliminar-producto" data-id="${producto.id}">Eliminar</button></td>
        `;
        
        tbody.appendChild(fila);
    });
}

// Función para eliminar un producto
function eliminarProducto(id) {
    productos = productos.filter(producto => producto.id !== id);
    guardarProductos();
    renderizarTablaProductos();
    renderizarProductosEnIndex(); // Actualiza los productos en el index.html
}

// Función para agregar un nuevo producto
function agregarProducto(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre-producto").value;
    const descripcion = document.getElementById("descripcion-producto").value;
    const precio = parseFloat(document.getElementById("precio-producto").value);
    const categoria = document.getElementById("categoria-producto").value;
    const imagen = "./asets/default_image.jpg"; // Imagen predeterminada si no se carga una

    const nuevoProducto = {
        id: productos.length ? productos[productos.length - 1].id + 1 : 1, // Genera un nuevo ID
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        categoria: categoria,
        imagen: imagen
    };

    productos.push(nuevoProducto);
    guardarProductos();
    renderizarTablaProductos();
    renderizarProductosEnIndex(); // Actualiza los productos en el index.html

    // Limpiar el formulario
    document.getElementById("product-form").reset();
}

// Renderizar productos en el index.html
function renderizarProductosEnIndex() {
    const productosContainer = document.querySelector('.cuadricula-productos');
    if (!productosContainer) return; // Asegura que el contenedor exista

    productosContainer.innerHTML = ''; // Limpiar productos anteriores si los hay

    productos.forEach((producto) => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <p>${producto.nombre}</p>
            <p>USD $${producto.precio}</p>
            <a href="/html/detalleProducto.html?id=${producto.id}" class="boton-comprar">Comprar</a>
        `;
        productosContainer.appendChild(divProducto);
    });
}

// Event listener para el formulario de agregar productos
const formAgregarProducto = document.getElementById("product-form");
if (formAgregarProducto) {
    formAgregarProducto.addEventListener("submit", agregarProducto);
}

// Event listener para el botón de eliminar
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("eliminar-producto")) {
        const id = parseInt(event.target.getAttribute("data-id"));
        eliminarProducto(id);
    }
});

// Ejecutar las funciones al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderizarTablaProductos();
    renderizarProductosEnIndex();
});
