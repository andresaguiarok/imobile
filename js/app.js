//Dom , muestra las cards de la tienda

let contenedor = document.getElementById ("tienda");

for (let producto of productos) {
    let div = document.createElement ("div");
    
    div.innerHTML = `<div class="card" style="width: 20rem;">
                            <h5 class="card-title text-center p-2">${producto.categoria}</h5>
                            <img src="${producto.img}" class="card-img-top p-1" alt="...">
                            <div class="card-body d-grid gap-2 ">
                                <h5 class="card-title text-center">${producto.nombre}</h5>
                                <h6 class="card-text text-center">Precio: ${producto.precio}$</h6>
                                <button class="btn btn-primary botoncito" id=boton${producto.id}>Añadir al carrito</button>
                            </div>
                            </div>`
     contenedor.append(div)

     const boton = document.getElementById (`boton${producto.id}`)

     boton.addEventListener('click', () => {
        carrito(producto.id)
        Toastify({
            text: `Se agrego el producto ${producto.nombre} al carrito.`,
            className: "info",
            duration: "1500",
            style: {
              background: "linear-gradient(to right, rgb(1, 13, 27), rgb(20, 80, 148))",
            }
        }).showToast();
     });
};

