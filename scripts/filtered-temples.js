
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;   


const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;   

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" , loading: "lazy"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg", loading: "lazy"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg", loading: "lazy"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg", loading: "lazy"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg", loading: "lazy"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg", loading: "lazy"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg", loading: "lazy"
    },

    {
      templeName: "",
      location:"",
      dedicated:"",
      area:"",
      imageUrl:
      "", loading: "lazy"
    },

    {
      templeName: "",
      location:"",
      dedicated:"",
      area:"",
      imageUrl:
      "", loading: "lazy"
    },

    {
      templeName: "",
      location:"",
      dedicated:"",
      area:"",
      imageUrl:
      "", loading: "lazy"
    }
    // Add more temple objects here...
  ];

  function createTempleCards() {
    const templeCardsContainer = document.getElementById('temple-cards'); // Assuming you have a container element with the ID 'temple-cards'
  
    temples.forEach(temple => {
      const card = document.createElement('div');
      card.classList.add('temple-card'); // Add a class for styling
  
      const image = document.createElement('img');
      image.src = temple.imageUrl;
      image.alt = temple.templeName;
      image.loading = 'lazy';
      card.appendChild(image);
  
      const name = document.createElement('h3');
      name.textContent = temple.templeName;
      card.appendChild(name);
  
      const location = document.createElement('p');
      location.textContent = temple.location;
      card.appendChild(location);
  
      const dedicated = document.createElement('p');
      dedicated.textContent = `Dedicated: ${temple.dedicated}`;
      card.appendChild(dedicated);
  
      const area = document.createElement('p');
      area.textContent = `Area: ${temple.area} square feet`;
      card.appendChild(area);
  
      templeCardsContainer.appendChild(card);
    });
  }
  
  createTempleCards();