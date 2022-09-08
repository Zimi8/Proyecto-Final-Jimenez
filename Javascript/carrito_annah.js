const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []; 
const total = carrito.reduce((acumulador, producto)=> acumulador + producto.precio, 0);
document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;  
 //Ah
//const eliminar = carrito.splice(())


// Pop Up MOdal del carrito BS 5.0 Crear más bonito. 
function generarCardsCarrito(){
    carrito.forEach((producto) => {
      document.getElementById("cards-modal-bs").innerHTML += `
      
      <div class="card" style="width: 18rem;">
  <img src="${producto.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${producto.descripcion}</p>
     <h4>$${producto.precio}</h4>
  </div>
  <button type="button" class="btn btn-danger eliminar-carrito" onclick = "eliminarDelCartito"()>Eliminar del Carrito</button>
</div>
      `
    })
  }
 /* Intento de borrar carrito con ayuda de un compañero.
  function eliminarDelCartito(productoEliminar){
    const id =carrito.find ((producto)=>producto.id === productoEliminar )
    const index = carrito.indexOf(item)
    carrito[index].cantidad=0

    carrito.splice(index,1)
    localStorage.removeItem("carrito",JSON.stringify(carrito))
    eliminarDelCartito()
  }*/

  /* `   <div>
      <h5>${producto.title}</h5>
      <span><img src="${producto.img}"  alt="" style="width: 150px;"></span>
      <td>${producto.precio}</td>
      <h6>${producto.id }</h6>
      <span></span>
      <td><button > Eliminar </button></td>
    </tr> `
     */ 

// id="${idButton2}"

const producto = [
     {id:1,
    title: "Estantería Moderna WHITE",
    precio: 269999,
    categoria: 'living',
    img:"https://annahdecoarg.netlify.app/assets/Galerias/verticales/estanteriaModernaAlta.jpg",
    items: 'estantería',
    descripcion: 'Estanteria hecha con madera prensada captada de árboles deforestados por tormentas en la patagonia Argentina',
    alt:'Estanteria con espacio para television, plantas, libros',
    categoria:'living'
    },

    {id:2,
        title: "Set Habitación Coreana",
        precio: 400000,
        categoria: 'dormitorio',
        img:"https://annahdecoarg.netlify.app/assets/Galerias/camaCoreana.jpg",
        items: 'cama foam',//,'biombo madera', 'alfombra cabano'
        descripcion: "Estanteria hecha con madera prensada captada de árboles deforestados por tormentas en la patagonia Argentina.",
        alt:'Estanteria con espacio para television, plantas, libros.',
        categoria:'habitacion'
     },

     {id:3,
        title: "Set Rustic Wooden",
        precio: 250000,
        categoria: 'living',
        img:"https://annahdecoarg.netlify.app/assets/Galerias/verticales/vertical%20sillon%20mimbre%20espejos.jpg",
        items: 'sillon de mimbre', //'mesa ratonera','lampara velador','espejos redondos','cajon mimbre'
        descripcion: 'Estanteria hecha con madera prensada captada de árboles deforestados por tormentas en la patagonia Argentina.',
    alt:'Estanteria con espacio para television, plantas, libros.',
    categoria:'living'
    },     
    

     {  id: 4,
        title: "Set at home",
        precio: '25000',
        categoria: 'living',
        img:"https://annahdecoarg.netlify.app/assets/Galerias/verticales/vertical%20sofa%20ratonera%20laptop.jpg",
        items:'sofa ultra soft',//, 'manta fluffy', 'alfombra fluffy','banco multiuso','velador de piso lofi','macetero wooden annah'
       descripcion: 'Estanteria hecha con madera prensada captada de árboles deforestados por tormentas en la patagonia Argentina.',
    alt:'Estanteria con espacio para television, plantas, libros.',
    categoria:'comedor'
        },
         
    {id:5,
            title: "Mesa Floral Marmol Wooden, Set de tardes de Té",
            precio: 150.000,
            categoria: 'comedor',
            img:"https://annahdecoarg.netlify.app/assets/Galerias/verticales/mesaDeTeFlores.jpg",
            items:'mesa circular de marmol',//,'estructura de madera recuperada','florero de cristal'
            descripcion: 'Mesa Circular de Mármol, estructura de madera recuperada de bosques patágonicos, Cuero Vegano. Florero de Cristal.',
            alt:'Mesa circular de marmol, patas de madera patagónica, sillas de cuero vegano.',
            categoria:'living'
            },

     { id:6,
            title: "Bar Annah Deco",
            precio: 1750.000 ,
            categoria: 'comercial',
            img:"https://annahdecoarg.netlify.app/assets/Galerias/living%20bar%20full%20deco.jpg",
            items:'set completo bar cafeteria',//, 'mesas circulares de hierro','sillas patagonicas',' biblioteca embebida','lampara hierro annah', ' empapelado bosques argentinos',
            descripcion: 'Estanteria hecha con madera prensada captada de árboles deforestados por tormentas en la patagonia Argentina.',
            alt:'Estanteria con espacio para television, plantas, libros.',
            categoria:'comercio'
            },           
];


for (const nodoHTML of document.getElementsByClassName('filtrar-categoria')){
    nodoHTML.onclick = (event) => { 
        const categoria = event.target.getAttribute('data-categoria')
        filtrarProductosCategory(categoria)
    }
}   

function filtrarProductosCategory (categoria){

 document.getElementById("seccionCards").innerHTML="";
  const productoFiltrado = producto .filter((producto) => producto.categoria === categoria);
  productoFiltrado.forEach((producto) =>{
    const idButton = `add-cart${producto.id}`
    document.getElementById("seccionCards").innerHTML += `
    <div class="col-md-4 mt-2" id="card">
       <div class="card">
           <div class="card-body">
               <div class="card-img-actions"> 
               <img src="${producto.img}" class="card-img img-fluid" width="96" height="350" alt="${producto.alt}"> 
               </div>
       </div>
           <div class="card-body bg-light text-center">
               <div class="mb-2">
                   <h6 class="font-weight-bold mb-2"> 
                   <!--title--> <h3>${producto.title}</h3> </h6> 
                   <a href="#" class="text-muted" data-abc="true">${producto.descripcion}</a>
               </div>
               <h3 class="mb-0 font-weight-semibold" id="precio">$${producto.precio}</h3>
               <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
               <div class="text-muted mb-3">Elegido por la audiencia más joven.</div> 
               <button id="${idButton}"  type="button" class="btn bg-cart" data-id="${producto.id}">
               <i class="fa fa-cart-plus mr-2 boton " data-id="${producto.id} id="${idButton}></i> Agregar al carrito</button>
           </div>`
  })
}

// 
/*
function filtrarProductosPorCategoria(categoria){
    document.getElementById("seccion-cards").innerHTML=""; 
     const productosFiltrados =   producto.filter((producto) => producto.category === categoria );
       *productosFiltrados.forEach((producto) => {
         *  const idButton = `add-cart${producto.id}`
           document.getElementById("seccion-cards").innerHTML += ` <div class="card">
           <div class="precio">
           <p>$${producto.price}</p>
           </div>
           <img src="${producto.img}">
           <h4>${producto.title}</h4>
           <a class="boton" id="${idButton}" data-id="${producto.id}">Añadir Al Carrito</a>
       </div>`;
         })   
       }
       */   


 
     

     
    
const annah = document.querySelector('#nombre-annah');

console.log(annah)


// DOM DOM 
producto.forEach((producto) =>{
   const idButton =`add-cart${producto.id}`
   document.getElementById("seccionCards").innerHTML += `
  
   <div class="col-md-4 mt-2" id="card">
       <div class="card">
           <div class="card-body">
               <div class="card-img-actions"> 
               <img src="${producto.img}" class="card-img img-fluid" width="96" height="350" alt="${producto.alt}"> 
               </div>
       </div>
           <div class="card-body bg-light text-center">
               <div class="mb-2">
                   <h6 class="font-weight-bold mb-2"> 
                   <!--title--> <h3>${producto.title}</h3> </h6> 
                   <a href="#" class="text-muted" data-abc="true">${producto.descripcion}</a>
               </div>
               <h3 class="mb-0 font-weight-semibold" id="precio">$${producto.precio}</h3>
               <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
               <div class="text-muted mb-3">Elegido por la audiencia más joven.</div> 
              
               <button id="${idButton}"  type="button" class="btn bg-cart" data-id="${producto.id}">
               <i class="fa fa-cart-plus mr-2 boton " data-id="${producto.id} id="${idButton}></i> Agregar al carrito</button>
           </div>
   `
})   // FIX THE BUTTON FOR AGREGAR AL CARRITO 
//BOTON   <a class="boton" id="${idButton}" data-id="${producto.id}">Añadir Al Carrito</a>

    // STORAGE
     
    //De ANNAH LOCAL
    producto.forEach((producto)=>{
        const idButton = `add-cart${producto.id}`
        document.getElementById(idButton).onclick=() => {
        carrito.push(producto);
        document.getElementById("cart-total").innerHTML = carrito.lenght;
        localStorage.setItem("carrito".JSON.stringify(carrito));
        }
     })   


// jerarquia. SUMA 2 ??
producto.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).addEventListener('click',() => {
     // carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito)); //
      const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
      document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;  
      Swal.fire({
        title: 'Agregaste al carrito',
        text: 'Seguí comprando!',
        icon: 'success',
        confirmButtonText: ' Seguir comprando '
    })
    })
  }); 







/*
producto.shift((producto) => {
    const idButton2= `delete-cart${producto.id}`
    document.getElementById(idButton2).addEventListener("click",()=> {
        carrito.shift(producto);
        localStorage.removeItem("carrito",JSON.stringify(carrito));
        const eliminar = carrito.shift((total, producto)=> acumulador - producto.precio, 0 );
        document.getElementById("delete-cart").innerHTML = `${carrito.lenght} - $${total}`;
    } )
})
*/

//  API SECCION DE API PA' TWITTTTERRRRR
/*
const mostrarFotoPixaBay = () => {
    fetch('https://pixabay.com/api/?key=29763147-1b00738d7a47e9c799790df33&q=nature&image_type=photo&pretty=true')
     .then((response)=> response.json())
     .then(info => {
       //let acumulador = ``;
    //console.log(info);
    informacion.hits.forEach((productos) => {
        console.log(productos)
    })
     })
}
mostrarFotoPixaBay();
*/

 // paso 2 II, llamar solo los valores de esos objetos en la consola de la Busqueda q= de esta api. 
 //Paso anotado, paso que funcionó. Min 01.32
 /*
 const mostrarFotoPixaBay = () => {
    fetch('https://pixabay.com/api/?key=29763147-1b00738d7a47e9c799790df33&q=nature&image_type=photo&pretty=true')
     .then((response)=> response.json())
     .then(info => { 
    console.log(info);
     })
}
mostrarFotoPixaBay();
*/

 //  JSON galeria
 const mostrarFotosInspiracion= () => {
    fetch('repositorio_carusel.json')
     .then((response)=> response.json())
     .then(informacion => {
        let acumulador = ``;
        informacion.forEach((producto) =>{
        console.log(producto)
        acumulador += `
            <img src="${producto.img}" class="rounded mx-auto d-block" alt="..." width="720px" height="400"  >
    `    
        })
       
    document.getElementById('seccion-pixa').innerHTML=acumulador;
     })
}
mostrarFotosInspiracion();

/*
<div>
        <img src="${producto.img}" alt="">
      </div>
      
      */





//hits, 0 .

//// ASI LLAMO LOS ARRAYS EN UN CONSOLE.LOG y funciona en consola., abajo.

/*     // PASO 1, LLAMAR LOS DATOS AL CONSOLE DE ESTA API Y BUSQUEDA
const mostrarFotoPixaBay = () => {
    fetch('https://pixabay.com/api/?key=29763147-1b00738d7a47e9c799790df33&q=nature&image_type=photo&pretty=true')
     .then((response)=> response.json())
     .then(info => {
       
    console.log(info);
     })
}
mostrarFotoPixaBay();
/*

const buscarProductoSimilarMercaLibre = () => {
    fetch( 'https://api.mercadolibre.com/sites/MLA/search?q=sillas' )
    .then((response)=> response.json())
    .then(informacion => {
      let acumulador = ``;
      informacion.results.forEach((producto) => {
        console.log(producto) //
        acumulador += `<div class="card">
        <img src="${producto.thumbnail}" width = "100px" height="100px" alt="Imagenes de productos varios"> 
        <h4>${producto.title}</h4>
        <h4>$${producto.price}</h4>
        </div>  `
      })
      document.getElementById('seccion-pixa').innerHTML = acumulador;
    })
  }
  
  buscarProductoSimilarMercaLibre (); 

  */






  /*
//FILTRO  . me rompio el dom
function filtrarProductosPorCategoria(categoria){
    document.getElementById("seccionCards").innerHTML="";
     const productosFiltrados = producto.filter((producto) => producto.categoria === categoria );
     productosFiltrados.forEach(() =>{
        const idButton = `add-cart${producto.id}`
        document.getElementById("seccionCards").innerHTML +=`<div class="col-md-4 mt-2" id="card">
        <div class="card">
            <div class="card-body">
                <div class="card-img-actions">
                <img src="${producto.img}" class="card-img img-fluid" width="96" height="350" alt="${producto.alt}">
                </div>
        </div>
            <div class="card-body bg-light text-center">
                <div class="mb-2">
                    <h6 class="font-weight-bold mb-2">
                    <!--title--> <h3>${producto.title}</h3> </h6>
                    <a href="#" class="text-muted" data-abc="true">${producto.descripcion}</a>
                </div>
                <h3 class="mb-0 font-weight-semibold" id="precio">$${producto.precio}</h3>
                <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
                <div class="text-muted mb-3">Elegido por la audiencia más joven.</div>
               
                <button type="button" class="btn bg-cart"" data-id="${producto.id}">
                <i class="fa fa-cart-plus mr-2 " data-id="${producto.id} id="${idButton}></i> Agregar al carrito</button>
            </div>`
     })
    }
    */