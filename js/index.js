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
