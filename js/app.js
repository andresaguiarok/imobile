let contenedor = document.getElementById ("tienda");

for (let producto of productos) {
    let div = document.createElement ("div");
    
    div.innerHTML = `<div class="card" style="width: 20rem;">
                            <h5 class="card-title text-center">${producto.categoria}</h5>
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">${producto.nombre}</h5>
                                <p class="card-text text-center">Precio: ${producto.precio}$</p>
                                <a href="#" class="btn btn-primary" id="boton"${producto.id}>Añadir al carrito</a>
                            </div>
                            </div>`
     contenedor.append(div)
}