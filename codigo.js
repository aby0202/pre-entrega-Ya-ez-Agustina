class Productos {
    constructor(nombre, precio, cantidad, tamaño) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.tamaño = tamaño;
    }
}

const restar = (a, b) => a - b;
const div = (a, b) => a / b;
const sumar = (a, b) => a + b;
const multi = (a, b) => a * b;
const producto = [];

producto.push(new Productos("Almohadon de pana ", 700, 0, "40x40 cm"));
producto.push(new Productos("Almohadon de tusor ", 700, 0, "40x40 cm"));
producto.push(new Productos("Almohadon de gasa ", 800, 0, "50x30 cm"));
producto.push(new Productos("Almohada para cama ", 1300, 0, "50x40 cm"));
producto.push(new Productos("Cortinas de gasa ", 13000, 0, "200x150 cm"));
producto.push(new Productos("Cortinas de tusor ", 15000, 0, "200x150 cm"));
producto.push(new Productos("Cortinas de lino ", 17000, 0, "200x150 cm"));
producto.push(new Productos("Cortinas de Blackout ", 18000, 0, "200x150 cm"));
producto.push(new Productos("Cortinas de pana ", 15000, 0, "200x150 cm"));
producto.push(new Productos("Mantel de tusor ", 5000, 0, "200x150 cm"));
producto.push(new Productos("Mantel waffle ", 7000, 0, "200x150 cm"));
producto.push(new Productos("Mantel gasa ", 5000, 0, "200x150 cm"));
producto.push(new Productos("Delantal ", 1500, 0, "70x40 cm"));
producto.push(new Productos("Juego de servilletas x 8 ", 4000, 0, "40x40 cm"));
producto.push(new Productos("Juego sabanas para cama king ", 20000, 0, "200 x 200 cm"));
producto.push(new Productos("Juego sabanas para cama Queen ", 18000, 0, "160 x 200 cm"));
producto.push(new Productos("Juego sabanas para cama 2 plazas y media ", 14000, 0, "140 x 190cm"));
producto.push(new Productos("Juego sabanas para cama 1 plaza y media ", 10000, 0, "190 x 090 cm"));
producto.push(new Productos("Pie de cama ", 9000, 0, "200 x 150 cm"));

let total = 0;
let cantidadProductos = 0;
let carrito = 0;



////////////////////////////////////


function filtro() {
    let filtroPrecios = prompt("1: Articulos menores a $1000 \n 2: Articulos desde $1000 a $10000 \n3: Articulos mayores a $10000 \n4: Atras");
    console.log(producto.filter((el) => el.precio < 1000));
let busqueda1 = producto.filter((el) => el.precio < 1000);
let busqueda2= producto.filter((el) => el.precio < 10000);
let busqueda3= producto.filter((el) => el.precio > 10000);
    while (filtroPrecios !== 4) {
        if (filtroPrecios == 1) {
            alert(`Los productos encontrados son: ${busqueda1}`);
            menu();
            break;
        }else if(filtroPrecios == 2){
            alert(`Los productos encontrados son: ${busqueda2}`);
            menu();
            break;
        }
        else if(filtroPrecios == 3){
            alert(`Los productos encontrados son: ${busqueda3}`);
            menu();
            break;
        }
        else if(filtroPrecios == 4){
            menu();
            break;
        }
    }
}

function busqueda(){
    let entrada = prompt("Ingrese el nombre del producto que desea encontrar en stock\n Ingreselo con un espacio al final!");
    console.log(producto.find((el) => el.nombre === entrada));
let busqueda = producto.find((el) => el.nombre === entrada);
if(busqueda) {
    alert(`SI tenemos ${entrada}, te enviaremos al menu`);
    menu();
}else {
    alert(`No tenemos ${entrada}, te enviaremos al menu`);
    menu()
}
}

function saludar() {
    let nombre = prompt('¿Cual es tu nombre?');
    alert(`¡HOLA ${nombre}!`);
    alert(`¡Bienvenido a Adolfina Decoracion!`);
}

saludar()

function compra() {
    let opcionseleccionada = prompt(
        "Desea realizar una compra?\n 1. Si  \n 2. No"
    );
    while (opcionseleccionada !== "no" || opcionseleccionada !== 2) {
        if (opcionseleccionada == "si" || opcionseleccionada == 1) {
            menu();
            break;
        } else if (opcionseleccionada == "no" || opcionseleccionada == 2) {
            alert("¡Gracias por pasar por Adolfina Decoracion!");
            break;
        }
    }
}

compra()



function menu() {
    let opcionseleccionada = prompt(
        "1: Almohadones \n 2:Cortinas \n 3:Cocina \n 4: Ropa de cama \n 5: Filtrar precios\n 6: Busqueda por nombre \n7: Salir");
    while (opcionseleccionada !== 7) {
        if (opcionseleccionada == 1) {
            almohadones();
            break;
        } else if (opcionseleccionada == 2) {
            cortinas();
            break;
        } else if (opcionseleccionada == 3) {
            cocina();
            break;
        } else if (opcionseleccionada == 4) {
            ropaDeCama();
            break;
        } else if (opcionseleccionada == 5) {
            filtro();
            break;
        }else if (opcionseleccionada == 6) {
            busqueda();
            break;
        }
    }
}

function pago() {
    let pago = parseInt(prompt(`Elija una opcion: \n1. Seguir Comprando\n2. Finalizar compra\n3. Salir`));
    while (pago !== 3) {
        if (pago == 1) {
            menu();
            break;
        } else if (pago == 2) {
            alert(`su compra es de un total de $${carrito}`);
            let pago = prompt(" ¿Que tipo de pago desea usar? \n1: Efectivo \n2: 3 cuotas sin interes \n3: 6 cuotas con recargo del 10% \n4: 12 cuotas con 20% interes");
            if (pago == 1) {
                alert(`Su total es de $${carrito} \n Te enviaremos al menu principal \n¡Gracias por confiar en Adolfina Decoracion!`)
                compra();
                break;
            } else if (pago == 2) {
                alert(`Usted opto por 3 cuotas de: \n $${div(carrito, 3)} cada una\n Te enviaremos al menu principal \n¡Gracias por confiar en Adolfina Decoracion!`);
                compra();
                break;
            } else if (pago == 3) {
                alert(`Usted opto por 6 cuotas de: $${div(sumar(carrito,(multi(carrito, 0.1))), 6)} cada una\n Te enviaremos al menu principal \n¡Gracias por confiar en Adolfina Decoracion!`);
                compra();
                break;
            } else if (pago == 4) {
                alert(`Usted opto por 12 cuotas de: $${div(sumar(carrito,(multi(carrito, 0.2))), 12)} cada una\n Te enviaremos al menu principal \n¡Gracias por confiar en Adolfina Decoracion!`);
                compra();
                break;
            }
        }
    }
}

function ropaDeCama() {
    let unidades;
    let opcionRopaDeCama = prompt(`1: ${producto[14].nombre}${producto[14].precio} \n 2: ${producto[15].nombre} ${producto[15].precio}\n 3: ${producto[16].nombre}${producto[16].precio} \n 4: ${producto[17].nombre} ${producto[17].precio} \n 5: ${producto[18].nombre}${producto[18].precio} \n 6: atras`);
    if (opcionRopaDeCama == 1) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[14].nombre} deseas?`));
        producto[14].cantidad = sumar(producto[14].cantidad, unidades);
        total = multi(unidades, producto[14].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[14].nombre}\n ${producto[14].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionRopaDeCama == 2) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[15].nombre} deseas?`));
        producto[15].cantidad = sumar(producto[15].cantidad, unidades);
        total = multi(unidades, producto[15].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[15].nombre}\n ${producto[15].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionRopaDeCama == 3) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[16].nombre} deseas?`));
        producto[16].cantidad = sumar(producto[16].cantidad, unidades);
        total = multi(unidades, producto[16].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[16].nombre}\n ${producto[16].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionRopaDeCama == 4) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[17].nombre} deseas?`));
        producto[17].cantidad = sumar(producto[17].cantidad, unidades);
        total = multi(unidades, producto[17].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[17].nombre}\n ${producto[17].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionRopaDeCama == 5) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[18].nombre} deseas?`));
        producto[18].cantidad = sumar(producto[18].cantidad, unidades);
        total = multi(unidades, producto[18].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[18].nombre}\n ${producto[18].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionRopaDeCama == 6) {
        menu();
    } else {
        alert("Imgrese una opcion valida");
    }
}

function cocina() {
    let unidades;
    let opcionCocina = prompt(`1: ${producto[9].nombre}${producto[9].precio} \n 2: ${producto[10].nombre} ${producto[10].precio}\n 3: ${producto[11].nombre}${producto[11].precio} \n 4: ${producto[12].nombre} ${producto[12].precio} \n 5: ${producto[13].nombre}${producto[13].precio} \n 6: atras`);
    if (opcionCocina == 1) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[9].nombre} deseas?`));
        producto[9].cantidad = sumar(producto[9].cantidad, unidades);
        total = multi(unidades, producto[9].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[9].nombre}\n ${producto[9].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionCocina == 2) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[10].nombre} deseas?`));
        producto[10].cantidad = sumar(producto[10].cantidad, unidades);
        total = multi(unidades, producto[10].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[10].nombre}\n ${producto[10].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionCocina == 3) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[11].nombre} deseas?`));
        producto[11].cantidad = sumar(producto[11].cantidad, unidades);
        total = multi(unidades, producto[11].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[11].nombre}\n ${producto[11].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionCocina == 4) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[12].nombre} deseas?`));
        producto[12].cantidad = sumar(producto[12].cantidad, unidades);
        total = multi(unidades, producto[12].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[12].nombre}\n ${producto[12].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionCocina == 5) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[13].nombre} deseas?`));
        producto[13].cantidad = sumar(producto[13].cantidad, unidades);
        total = multi(unidades, producto[13].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[13].nombre}\n ${producto[13].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionCocina == 6) {
        menu();
    } else {
        alert("Ingrese una opcion valida");
        cocina();
    }
}

function almohadones() {
    let unidades;
    let opcionAlmohadones = prompt(`1: ${producto[0].nombre}${producto[0].precio} \n 2: ${producto[1].nombre} ${producto[1].precio}\n 3: ${producto[2].nombre}${producto[2].precio} \n 4: ${producto[3].nombre} ${producto[3].precio} \n 5: atras`);
    if (opcionAlmohadones == 1) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[0].nombre} deseas?`));
        producto[0].cantidad = sumar(producto[0].cantidad, unidades);
        total = multi(unidades, producto[0].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[0].nombre}\n ${producto[0].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionAlmohadones == 2) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[1].nombre} deseas?`));
        producto[1].cantidad = sumar(producto[1].cantidad, unidades);
        total = sumar(total, multi(unidades, producto[1].precio));
        total = multi(unidades, producto[1].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[1].nombre}\n ${producto[1].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionAlmohadones == 3) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[2].nombre} deseas?`));
        producto[2].cantidad = sumar(producto[2].cantidad, unidades);
        total = multi(unidades, producto[2].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[2].nombre}\n ${producto[2].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionAlmohadones == 4) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[3].nombre} deseas?`));
        producto[3].cantidad = sumar(producto[3].cantidad, unidades);
        total = multi(unidades, producto[3].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[3].nombre}\n ${producto[3].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionAlmohadones == 5) {
        menu();
    } else {
        alert("Ingrese una opcion correcta");
        almohadones();
    }
}

function cortinas() {
    let unidades;
    let opcionCortinas = prompt(`1: ${producto[4].nombre}${producto[4].precio} \n 2: ${producto[5].nombre} ${producto[5].precio}\n 3: ${producto[6].nombre}${producto[6].precio} \n 4: ${producto[7].nombre} ${producto[7].precio} \n 5: ${producto[8].nombre} ${producto[8].precio}  \n 6:atras`);
    if (opcionCortinas == 1) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[4].nombre} deseas?`));
        producto[4].cantidad = sumar(producto[4].cantidad, unidades);
        total = sumar(total, multi(unidades, producto[4].precio));
        total = multi(unidades, producto[4].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[4].nombre}\n ${producto[4].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionCortinas == 2) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[5].nombre} deseas?`));
        producto[5].cantidad = sumar(producto[5].cantidad, unidades);
        total = multi(unidades, producto[5].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[5].nombre}\n ${producto[5].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionCortinas == 3) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[6].nombre} deseas?`));
        producto[6].cantidad = sumar(producto[6].cantidad, unidades);
        total = multi(unidades, producto[6].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[6].nombre}\n ${producto[6].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionCortinas == 4) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[7].nombre} deseas?`));
        producto[7].cantidad = sumar(producto[7].cantidad, unidades);
        total = multi(unidades, producto[7].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[7].nombre}\n ${producto[7].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionCortinas == 5) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${producto[8].nombre} deseas?`));
        producto[8].cantidad = sumar(producto[8].cantidad, unidades);
        total = multi(unidades, producto[8].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \n especificacion del producto :\n ${producto[8].nombre}\n ${producto[8].tamaño} \n cantidad: ${unidades} \n carrito: $${carrito}`);
        pago();
    } else if (opcionCortinas == 6) {
        menu();
    } else {
        alert("Ingrese una opcion correcta");
        cortinas();
    }

}