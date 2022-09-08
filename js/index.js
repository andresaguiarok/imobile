//Registro de usuario con ciclos

function registro (){
    for (let i = 1; i <= 8; i++){
        let nombre = prompt ("Ingrese su nombre");
        let apellido = prompt ("Ingrese su apellido");

        if (i == 3 || i == 6){
            alert("Usuario registrado anteriormente");
            continue;
        }else if (i === 8){
            break;
        }else {
            alert(`Felicidades , ${nombre} ${apellido} fue registrado exitosamente como usuario n° ${i}`);
        }
    }
    return
}

registro ();
alert("Se acabaron los registros diarios");

//Simulador de cuotas

function calcular (precio, envio, cuotas){
    let precioTotal = precio + envio;
    let precioFinal = precioTotal / cuotas;
    alert(`El precio del producto mas el envio es ${precioTotal} AR$`);
    alert(`Seran ${cuotas} cuotas de ${precioFinal} AR$`);
    return
}

let precio = parseFloat(prompt("Ingrese un precio"));
let cuotas = parseFloat(prompt("Ingrese cantidad de cuotas"));
let envio = 5000;

calcular (precio, envio, cuotas);
alert ("Gracias por su compra");

//Objeto

class tienda{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const iphone1 = new tienda ("Iphone 11", 230000);
const moto1 = new tienda ("Motorola G200", 110000);
const samsung = new tienda ("Samsung Galaxy S22 Ultra", 268000); 

console.log(iphone1);
console.log(moto1);
console.log(samsung);

//Desafio

let productos = [
    {nombre: "Iphone 11" , precio: 230000},
    {nombre: "Iphone 12" , precio: 530000},
    {nombre: "Iphone 13" , precio: 380000},
    {nombre: "Motorola G200" , precio: 110000},
    {nombre: "Motorola Edge 20 Pro" , precio: 130000},
    {nombre: "Motorola Edge 30 Pro" , precio: 170000},
    {nombre: "Samsung Galaxy S22 Ultra" , precio: 268000},
    {nombre: "Samsung Galaxy Z Flip 3" , precio: 220000},
    {nombre: "Samsung Galaxy Z Fold 4" , precio: 410000},
];

productos.push({nombre: "Iphone 14", precio: 610000});
productos.push({nombre: "Samsung Galaxy S21", precio: 112000});

for (let producto of productos){
    let ingrese = prompt("Ingrese el nombre del producto");
    let producto = productos.find(item => item.nombre === ingrese);

    alert(`El producto seleccionado es ${producto.nombre} y cuesta ${producto.precio} AR$`);
    break;
};
