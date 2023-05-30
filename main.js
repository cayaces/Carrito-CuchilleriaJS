
tituloProductos.className = "titulo";

class Producto {
    constructor(nombreProducto, img, precio) {
        this.nombreProducto = nombreProducto;
        this.img = img;
        this.precio = precio;
    }
 
}

const cuchilloProfesional = new Producto("cuchilloProfesional", "./img/cuchilloprofesional.jpg", 10000);
const cuchilloSantoku = new Producto("cuchilloSantoku", "./img/cuchillosantoku.jpg", 15000);
const tablaParaCortar = new Producto("tablaCortar", "./img/tablaparacortar.jpg", 20000);
const tablaCarnes = new Producto("tablaCarnes", "./img/tabla2.jpg", 25000);

const arrayProductos = [cuchilloProfesional, cuchilloSantoku, tablaParaCortar, tablaCarnes];


const contenedorProductos = document.getElementById
    ("contenedorProductos");

    const btn = document.getElementById("btnalert");
    btn.addEventListener("click", mostrarAlerta);

    function mostrarAlerta() {
        alert("Producto agregado al carrito");
    }

arrayProductos.forEach(producto => {
    const div = document.createElement("div");
    div.className = "caja";
    div.innerHTML = `<p>Nombre: ${producto.nombreProducto} </p>
                     <p>Precio: ${producto.precio} </p>
                     <img class="wayu" src="${producto.img}">
                     <button> Agregar </button>
                     
                     `;
    contenedorProductos.appendChild(div);
})

const cliente = {
    productoUsuario: [],
    precioProducto: [],
}

const productoCliente = JSON.stringify(cliente);
localStorage.setItem("usuario", productoCliente);