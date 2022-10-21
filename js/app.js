//Dom , muestra las cards de la tienda

let contenedor = document.getElementById ("tienda");
let navbar = document.getElementById ("navbar");
let footer = document.getElementById ("pieDePagina");

//Array
let prod = [];

//Fetch , simulamos una api usando un archivo Json y traemos los datos 
let traerDatos = async () => {
   try {
    let response = await fetch("./data.json");
    let data = await response.json();
    let productos = data;

    //pusheamos los productos al array Prod 
    data.forEach((producto) => {
        prod.push(producto)});

    productos.forEach(producto => {
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

        //boton para agregar articulo al carrito
        const boton = document.getElementById (`boton${producto.id}`)
    
        boton.addEventListener('click', () => {
            carrito(producto.id)
            Toastify({
                text: `Se agrego el producto ${producto.nombre} al carrito.`,
                duration: "1500",
                style: {
                   background: "linear-gradient(to right, rgb(1, 13, 27), rgb(20, 80, 148))",
                }
            }).showToast();
        });
    });
   }catch (error){
    console.log(error);
   }
}

traerDatos();

//Nodo del navbar
let nav = document.createElement ("nav")
nav.className = ("navbar navbar-expand-lg bg-light menu container-fluid")

nav.innerHTML = `
                    <div class="container-fluid">
                        <div class="navbar-brand">
                            <img src="./images/logos_sitio/logo_imobile.png" alt="Logo del sitio" class="logoNav">
                        </div>
                        <button class="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon "></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="./index.html">Tienda</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./pages/contacto.html">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>`
navbar.appendChild(nav);

//Nodo del footer
let div = document.createElement ("div")
div.className = ("container-fluid pie")

div.innerHTML = `<div class="row">
                 <div class="text-center">
                     <img src="./images/logos_sitio/logo_imobile.png" alt="logo del site" class="logo">
                 </div>
                 <div class="row">
                     <div class="text-center">
                         <img src="./images/logos_redes_sociales/facebook_logo.png" alt="" class="face">
                         <img src="./images/logos_redes_sociales/instagram_logo.png" alt="" class="insta">
                     </div>
                 </div>
                 </div>`
footer.appendChild(div);



