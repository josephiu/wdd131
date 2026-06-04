
const mainnav = document.querySelector('.site-navigation')
const hambutton = document.querySelector('.hamburger');


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show-nav');
	hambutton.classList.toggle('ham-animated');
});



const gallery = document.querySelector('.gallery');





const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
	dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Querétaro Mexico Temple",
    location: "Querétaro, Mexico",
    dedicated: "2023,  January, 7",
    area: 27500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/queretaro-mexico-temple/queretaro-mexico-temple-23845-main.jpg"
  },
 {
    templeName: "Neiafu Tonga Temple",
    location: "Neiafu, Tonga",
    dedicated: "2021, September, 11",
    area: 17000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/neiafu-tonga-temple/neiafu-tonga-temple-11240-main.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: " 2001, November, 16",
    area: 17500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  // Add more temple objects here...
];





makeTampleCard(temples);


function makeTampleCard (filteredTemples) {
  gallery.innerHTML = ''; // Clear the gallery before adding new cards
  filteredTemples.forEach(temple => {
    const card = document.createElement('figure');
    const h2 = document.createElement('h2');
    const location = document.createElement('p');
    const dedicated = document.createElement('p');
  const area = document.createElement('p');
  const image = document.createElement('img');
  h2.textContent = temple.templeName;
  location.textContent = `Location: ${temple.location}`;
  dedicated.textContent = `Dedicated: ${temple.dedicated}`;	
  area.textContent = `Area: ${temple.area} sq ft`;
  image.setAttribute('src', temple.imageUrl);
  image.setAttribute('alt', `Image of ${temple.templeName}`);
  image.setAttribute('loading', 'lazy');

  card.appendChild(h2);
  card.appendChild(location);
  card.appendChild(dedicated);
  card.appendChild(area);
  card.appendChild(image);
  gallery.appendChild(card); 


  
})
;};





const oldTemplesLink = document.getElementById('old-temples');
const newTemplesLink = document.getElementById('new-temples');
const largeTemplesLink = document.getElementById('large-temples');
const smallTemplesLink = document.getElementById('small-temples');





function getDedicationYear(temple) {
  return parseInt(temple.dedicated.trim().split(',')[0]);

};



// decication year old
oldTemplesLink.addEventListener('click', (e) => {
	 e.preventDefault(); // helps prevent the default link behavior, which would cause a page reload
  const old = temples.filter(temple => getDedicationYear(temple) <= 1900);
  makeTampleCard(old);
});


// decication year new
newTemplesLink.addEventListener('click', (e) => {
	 e.preventDefault(); // // helps prevent the default link behavior, which would cause a page reload
  const newT = temples.filter(temple => getDedicationYear(temple) >= 2000);
  makeTampleCard(newT);
});


// large area
largeTemplesLink.addEventListener('click', (e) => {
	 e.preventDefault(); // // helps prevent the default link behavior, which would cause a page reload
  const largT = temples.filter(temple => temple.area >= 90000);
  makeTampleCard(largT);
});

// small area
smallTemplesLink.addEventListener('click', (e) => {
	 e.preventDefault(); // helps prevent the default link behavior, which would cause a page reload
  const smallT = temples.filter(temple => temple.area <10000);
  makeTampleCard(smallT);
});