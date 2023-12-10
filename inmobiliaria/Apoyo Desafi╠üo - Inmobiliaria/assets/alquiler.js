const propiedades_en_alquiler = [
  {
      name: 'Apartamento en el centro de la ciudad',
      imgSrc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
      desc: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
      address: '123 Main Street, Anytown, CA 91234',
      rooms: 2,
      baths: 2,
      price: 2000,
      smoke: false,
      pets: true  
  },
  {
      name: 'Chalet completo en arriendo',
      imgSrc: 'https://th.bing.com/th?q=Casas+Victorianas&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=es-CL&cc=CL&setlang=es&adlt=moderate&t=1&mw=247' ,
      desc: 'Chalet completo en arriendo.',
      address: '123 center, ps 123654',
      rooms: 5,
      baths: 5,
      price: 6000,
      smoke: false,
      pets: true  
  },


  {
  name: 'Apartamento luminoso con vista al mar',
  imgSrc: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80 ' ,
  desc: 'Este hermoso apartamento ofrece una vista impresionante al mar',
  address: '456 Ocean Avenue,Seaside Town, CA 56789',
  rooms: 3,
  baths: 3,
  price: 2500,
  smoke: true,
  pets: true, 
},

{
  name: 'Condominio moderno en zona residencial',
  imgSrc: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80 ' ,
  desc: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
  address: '123 Main Street, Anytown, CA 91234',
  rooms: 2,
  baths: 2,
  price: 2200,
  smoke: false,
  pets: false, 

},

{
  name: 'Apartamento luminoso en el centro de la ciudad',
  imgSrc: ' https://images.unsplash.com/photo-1701209770647-b7e4e25112ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D' ,
  desc: 'Este hermoso apartamento ofrece una vista impresionante al distrito financiero',
  address: '123 Main Street, Anytown, CA 91234',
  rooms: 1,
  baths: 1,
  price: 3500,
  smoke: true,
  pets: true, 

},



];

const alquilerContainer = document.getElementById('alquiler-container');


const isIndexPageAlquiler = window.location.pathname.endsWith('index.html');
const maxPropertiesToShowAlquiler = isIndexPageAlquiler ? 3 : propiedades_en_alquiler.length;


for (let i = 0; i < maxPropertiesToShowAlquiler; i++) {
  const propiedad = propiedades_en_alquiler[i];

  
  if (i % 3 === 0) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');
      alquilerContainer.appendChild(rowDiv);
  }

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('col-md-4', 'mb-4');


  cardDiv.innerHTML = `
      <div class="card">
          <img src="${propiedad.imgSrc}" class="card-img-top" alt="Imagen del departamento" />
          <div class="card-body">
              <h5 class="card-title">${propiedad.name}</h5>
              <p class="card-text">${propiedad.desc}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${propiedad.address}</p>
              <p><i class="fas fa-bed"></i> ${propiedad.rooms} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.baths} Baños</p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedad.price}</p>
              <p class="text-${propiedad.smoke ? 'success' : 'danger'}">
                  <i class="fas fa-smoking-${propiedad.smoke ? 'allowed' : 'ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
              </p>
              <p class="text-${propiedad.pets ? 'success' : 'danger'}">
                  <i class="fas fa-paw"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
              </p>
          </div>
      </div>
  `;


  alquilerContainer.lastChild.appendChild(cardDiv);
}
