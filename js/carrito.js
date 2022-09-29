//Carrito de la pagina
const contenedorProducto = document.getElementById("carrito");
const vaciarCarrito = document.getElementById("botonVaciarCarrito");
const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("precioTotal");

let compra = [];

document.addEventListener("DOMContentLoaded" , () => {
    if (localStorage.getItem("compra")){
        compra = JSON.parse(localStorage.getItem("compra"))
        actualizarCarrito()
    }
})

vaciarCarrito.addEventListener ("click", () => {
    compra.length = 0
    Toastify({
        text: `SE VACIO EL CARRITO`,
        className: "info",
        duration: "1500",
        gravity: "top",
        position: "left",
        style: {
          background: "linear-gradient(to left, rgb(88, 0, 0), rgb(88, 0, 0) , rgb(0, 0, 0))",
        }
    }).showToast();
    actualizarCarrito();

})

let carrito = (productoId) => {
    const hay = compra.some (producto => producto.id == productoId)
    hay ? producto = compra.map (producto => { producto.id === productoId && producto.cantidad++})
    : producto = productos.find (producto => {producto.id == productoId && compra.push(producto)}) || console.log(compra)
    actualizarCarrito();  
}

const eliminarProducto = (productoId) => {
    let producto = compra.find((producto) => producto.id === productoId)
    let item = compra.slice(producto)
    compra.splice(item , 1);
    Toastify({
        text: `Se elimino ${producto.nombre} del carrito.`,
        className: "info",
        gravity: "top",
        duration: "1500",
        style: {
          background: "rgb(66, 139, 221)",
          width: "400",
        }
    }).showToast();
    actualizarCarrito();
}

const actualizarCarrito = () => {
    contenedorProducto.innerHTML = ""

    compra.forEach( (producto) => {
        let div = document.createElement("div")
        div.innerHTML = `<table class="table row">
                              <th id="cantidad" class="col-2">${producto.cantidad}</th>
                              <td class="col-6">${producto.nombre}</td>
                              <td class="col-5">${producto.precio}</td>
                              <td class="col-1"><button onclick ="eliminarProducto(${producto.id})" class="btn btn-danger">x</button></td>
                         </table>  
        `
        contenedorProducto.append(div)

        localStorage.setItem("compra" , JSON.stringify(compra))
    })
    
    contadorCarrito.innerText = compra.length
    precioTotal.innerText = compra.reduce((acc , producto) => acc + producto.cantidad * producto.precio, 0)
}


     

