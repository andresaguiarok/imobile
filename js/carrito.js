//Carrito de la pagina
const compra = [];

let carrito = (productoId) => {

    let contenedorProducto = document.getElementById("carrito")

    const carritoLleno = () => {
        let producto = productos.find (producto => producto.id == productoId)
        compra.push(producto)
        console.log(compra);

        producto.cantidad = 1

        let div = document.createElement ("div")
        div.innerHTML = `<div class="productoCarrito p-2">  
                            <h5 class="text-center">${producto.nombre}</h5>
                            <img src="${producto.img}" class="rounded mx-auto d-block">
                            <b class="text-center">Precio: ${producto.precio}</b>
                            <p id="cantidad${producto.id}" class="text-center">Cantidad: ${producto.cantidad}</p>
                            <button class="btn btn-danger">Eliminar</button>
                        </div> `
     contenedorProducto.append(div)   
     
        localStorage.setItem("compra",JSON.stringify(compra));
    }
    carritoLleno()
    
};
