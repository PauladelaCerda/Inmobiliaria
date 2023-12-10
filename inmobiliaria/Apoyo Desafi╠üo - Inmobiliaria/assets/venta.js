const propiedades_en_venta = [
    {
      name: 'Apartamento de lujo en zona exclusiva',
      imgSrc: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      desc: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
      address: '23 Luxury Lane, Prestige Suburb, CA 45678',
      rooms: 4,
      baths: 4,
      price: 5000,
      smoke: false,
      pets: false 
    },
    {
      name: 'Apartamento acogedor en la montaña',
      imgSrc: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
      desc: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.',
      address: '789 Mountain Road, Summit Peaks, CA 23456',
      rooms: 2,
      baths: 1,
      price: 1200,
      smoke: true,
      pets: true, 
    },
    {
      name: 'Penthouse de lujo con terraza panorámica',
      imgSrc: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
      desc: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
      address: '567 Skyline Avenue, Skyview City, CA 56789',
      rooms: 3,
      baths: 3,
      price: 4500,
      smoke: false,
      pets: true, 
    },
    {
      name: 'Casa vacacional',
      imgSrc: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D',
      desc: 'Alejado de todos y de todo disfruta de esta maravillosa casa',
      address: '567 Skyline Avenue, Islandia, is 557455',
      rooms: 2,
      baths: 1,
      price: 1500,
      smoke: true,
      pets: true, 
    },
    {
      name: 'Casa moderna',
      imgSrc: 'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlfGVufDB8fDB8fHww',
      desc: 'Moderna casa autosustentable',
      address: '123 planet, Los Angeles, la 4455000',
      rooms: 4,
      baths: 4,
      price: 6000,
      smoke: false,
      pets: true, 
    },
  ];


const ventaContainer = document.getElementById('venta-container');


const isIndexPage = window.location.pathname.endsWith('index.html');
const maxPropertiesToShow = isIndexPage ? 3 : propiedades_en_venta.length;


for (let i = 0; i < maxPropertiesToShow; i++) {
    const propiedad = propiedades_en_venta[i];


    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col-md-4', 'mb-4');

   
    cardDiv.innerHTML = `
        <div class="card">
            <img src="${propiedad.imgSrc}" class="card-img-top" alt="Imagen de la propiedad" />
            <div class="card-body">
                <h5 class="card-title">${propiedad.name}</h5>
                <p class="card-text">${propiedad.desc}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.address}</p>
                <p><i class="fas fa-bed"></i> ${propiedad.rooms} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.baths} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.price}</p>
                <p class="text-${propiedad.smoke ? 'success' : 'danger'}">
                    <i class="fas fa-smoking${propiedad.smoke ? '' : '-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                </p>
                <p class="text-${propiedad.pets ? 'success' : 'danger'}">
                    <i class="fas fa-paw"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                </p>
            </div>
        </div>
    `;

  
    ventaContainer.appendChild(cardDiv);
}