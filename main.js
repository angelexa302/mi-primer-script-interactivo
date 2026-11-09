//Solicitar datos al usuario
const nombre = prompt("Ingrese su nombre y apellido: ");
const producto = prompt("Que producto desea comprar?: ");
//convertir los datos ingresados a números
const precio = parseFloat(prompt("Ingrese el precio del producto: "));
const cantidad = parseInt(prompt("Ingrese la cantidad de productos que desea comprar: "));
//calcular el total a pagar
let total = precio * cantidad;
let mensaje = "hola "+ nombre+ ". El total a pagar por " + cantidad + " " + producto + " es: $" + total;
alert(mensaje);
console.log(mensaje);




