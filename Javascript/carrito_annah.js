const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []; 
const total = carrito.reduce((acumulador, producto)=> acumulador + producto.precio, 0);
document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;  
 //Ah
//const eliminar = carrito.splice(())


// Pop Up MOdal del carrito BS 5.0 Crear más bonito. 
function generarCardsCarrito(){
    carrito.forEach((producto) => {
      document.getElementById("cards-modal-bs").innerHTML += ` 
      <div>
      <h5>${producto.title}</h5>
      <span><img src="${producto.img}"  alt="" style="width: 150px;"></span>
      <td>${producto.precio}</td>
      <h6>${producto.id }</h6>
      <span></span>
      <td><button > Eliminar </button></td>
    </tr>`
    })
  }
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

producto.shift((producto) => {
    const idButton2= `delete-cart${producto.id}`
    document.getElementById(idButton2).addEventListener("click",()=> {
        carrito.shift(producto);
        localStorage.removeItem("carrito",JSON.stringify(carrito));
        const eliminar = carrito.shift((total, producto)=> acumulador - producto.precio, 0 );
        document.getElementById("delete-cart").innerHTML = `${carrito.lenght} - $${total}`;
    } )
})


//  API SECCION DE API PA' TWITTTTERRRRR
