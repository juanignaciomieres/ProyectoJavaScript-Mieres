// SALUDO A LA CONSOLA 
console.log("Bienvenido al Almacen Online")

const titulo = document.getElementById("titulo");

titulo.textContent = "Almacen Online";

titulo.style.color = "brown";
titulo.style.fontSize = "40px";

alert("BIENVENIDO A ALMACEN");


console

//EDAD

let edad = prompt ("Ingresa tu edad");

if (edad <= 18) {
    alert("Eres mayor de 18 años");
    console.log("Podes Ingresar a la Página");
} else {
    console.log("No, podras ver ciertos productos");
}

//USUARIO 

let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")) {
    alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado); 
} else {
    alert("Error: Ingresar nombre y apellido");
}

//Tienda Con Opciones

let total = 0
let productos = "Los productos que usted compro son los siguientes: "

function validarDatos (dato) {
    if (isNaN (dato)) {
        return false 
    } else {
        return true 
    } }

    function logicaDeValidacion(pregunta) {
        let numero = Number(prompt(pregunta));
        let validado = validarDatos(numero);
    
        while (!validado) {
            alert("Eso no es un número");
            numero = Number(prompt(pregunta));
            validado = validarDatos(numero);
        }
    
        return numero;
    }
 
function logicaDeCompra (precio, productos, cantidad=1) {
    total = total + precio * cantidad 
    productos = productos + "\n" + productos + "X" + cantidad 
}

function AlmacenOnline() {
    let bandera = true
    while(bandera) {
    let opciones = logicaDeValidacion("Bienvenido al Almacen Online, ¿Qué deseas comprar?\n 1-Salamin\n 2- Queso de Campo\n 3- Cerveza\n");
        
    let cantidad = 1  

    let validado = validarDatos (opciones)
    
    while (!validado) {
        alert ("Eso no es un Número")
        opciones = Number(prompt("Bienvenido al Almacen Online, ¿Qué deseas comprar?\n 1-Salamin\n 2- Queso de Campo\n 3- Cerveza\n"))
        let validado = validarDatos (opciones)
    }
    
    if (opciones !== 0) {
        cantidad = Number (prompt ("¿Cuánto mas quieres comprar?"))
    }
    
        switch (opciones) {
            case 0:
                return
            case 1:
                cantidad = logicaDeValidacion("¿Cuantos salamines deseas?");
                logicaDeCompra(100, "Salamin", cantidad);
                bandera = confirm("¿Quieres seguir comprando?");
                break;
            case 2:
                cantidad = logicaDeValidacion("¿Cuánto Queso de Campo deseas comprar?");
                logicaDeCompra(200, "Queso de Campo", cantidad);
                bandera = confirm("¿Quieres seguir comprando?");
                break;
            case 3:
                cantidad = logicaDeValidacion("¿Cuánta Cerveza deseas comprar?");
                logicaDeCompra(500, "Cerveza", cantidad);
                bandera = confirm("¿Quieres seguir comprando?");
                break;
            default:
                alert("No tenemos esa opción");
                bandera = confirm("¿Quieres seguir comprando?");
        } 
    }
}

console.log (total)
console.log (productos)
AlmacenOnline() 