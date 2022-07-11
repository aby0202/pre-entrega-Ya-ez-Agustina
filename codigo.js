
let titulo = document.getElementById("header");
titulo.innerHTML = "<h1>Adolfina Decoracion</h1>";

let texto = document.getElementById("texto");
texto.innerHTML = "<h2>¿Quienes somos?</h2><p>Adolfina Decoracion surgio como un proyecto de hermanas. Desde chicas nos encantaba coser, diseñar, mezclar texturas y colores</p>"

class Producto {
    constructor(id, nombre, precio, cantidad, tamaño) {
        this.id= id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.tamaño = tamaño;
    }
}

class Carrito {
    constructor(id) {
        this.id = id;
        this.productos = [];
    }

    calcularTotal() {
        let total = 0;
        for(let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precio;
        }
        return total;
    }

}



function renderCard(producto) {
    let cardRendered = ` 
    <div class="col-md-4 mt-3">
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">${producto.id}.${producto.nombre}</h5>
            <p class="card-text">Precio: <b>$ ${producto.precio}</b></p>
            <p class="card-text">Tamaño: <b>${producto.tamaño}<b></p>
            <a href="#" class="btn btn-primary botonDeCompra" id="${producto.id}">Agregar al carrito</a>
        </div>
    </div>
    </div>   
    `;
    return cardRendered;
}

function limpiarCarrito() {
    let divCarrito = document.querySelector("#carrito");
    divCarrito.innerHTML = "";
}

function actualizarCarrito(carrito) {
    let divCarrito = document.querySelector("#carrito");
    carrito.productos.forEach(producto => {
        divCarrito.innerHTML += renderCard(producto);
    })
    divCarrito.innerHTML += `<h1>Precio Total: $ ${carrito.calcularTotal()}</h1>`
}

function renovarStorage() {
    localStorage.removeItem("carrito"); 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


window.addEventListener('DOMContentLoaded', (e) => {
    let storage = JSON.parse(localStorage.getItem("carrito"));
    let carritoGuardado = new Carrito(storage.id, storage.productos);
    storage.productos.forEach(producto => {
        carritoGuardado.productos.push(producto);
    })
    limpiarCarrito();
    actualizarCarrito(carritoGuardado);
});


let catalogoProductos = [];

catalogoProductos.push(new Producto(1, "Almohadon de pana ", 700, 0, "40x40 cm"));
catalogoProductos.push(new Producto(2, "Almohadon de tusor ", 700, 0, "40x40 cm"));
catalogoProductos.push(new Producto(3, "Almohadon de gasa ", 800, 0, "50x30 cm"));
catalogoProductos.push(new Producto(4, "Almohada para cama ", 1300, 0, "50x40 cm"));
catalogoProductos.push(new Producto(5, "Cortinas de gasa ", 13000, 0, "200x150 cm"));
catalogoProductos.push(new Producto(6, "Cortinas de tusor ", 15000, 0, "200x150 cm"));
catalogoProductos.push(new Producto(7, "Cortinas de lino ", 17000, 0, "200x150 cm"));
catalogoProductos.push(new Producto(8, "Cortinas de Blackout ", 18000, 0, "200x150 cm"));
catalogoProductos.push(new Producto(9, "Cortinas de pana ", 15000, 0, "200x150 cm"));
catalogoProductos.push(new Producto(10, "Mantel de tusor ", 5000, 0, "200x150 cm"));
catalogoProductos.push(new Producto(11, "Mantel waffle ", 7000, 0, "200x150 cm"));
catalogoProductos.push(new Producto(12, "Mantel gasa ", 5000, 0, "200x150 cm"));
catalogoProductos.push(new Producto(13, "Delantal ", 1500, 0, "70x40 cm"));
catalogoProductos.push(new Producto(14, "Juego de servilletas x 8 ", 4000, 0, "40x40 cm"));
catalogoProductos.push(new Producto(15, "Juego sabanas para cama king ", 20000, 0, "200 x 200 cm"));
catalogoProductos.push(new Producto(16, "Juego sabanas para cama Queen ", 18000, 0, "160 x 200 cm"));
catalogoProductos.push(new Producto(17, "Juego sabanas para cama 2 plazas y media ", 14000, 0, "140 x 190cm"));
catalogoProductos.push(new Producto(18, "Juego sabanas para cama 1 plaza y media ", 10000, 0, "190 x 090 cm"));
catalogoProductos.push(new Producto(19, "Pie de cama ", 9000, 0, "200 x 150 cm"));




let cardsDiv = document.querySelector("#cards");
catalogoProductos.forEach(producto => {
    cardsDiv.innerHTML += renderCard(producto);
})


let carrito = new Carrito(1);
let botones = document.querySelectorAll(".botonDeCompra");
let arrayDeBotones = Array.from(botones);
arrayDeBotones.forEach(boton => {
    boton.addEventListener("click", (e) => {
        let productoSeleccionado = catalogoProductos.find(producto => producto.id == e.target.id);
        carrito.productos.push(productoSeleccionado);
        limpiarCarrito();
        actualizarCarrito(carrito);
        renovarStorage();
    })
});