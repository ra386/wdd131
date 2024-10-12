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
      templeName: "Baton Rouge",
      location: "Louisiana, United States",
      dedicated: "2000, July, 16 ",
      area: 10890,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/baton-rouge-louisiana/400x250/3-a75beca22300a3263bd47fba03b5b0d1b5ca0753.jpeg"
    },
    {
      templeName: "Houston Texas",
      location: "Texas, United States",
      dedicated: "2000, August, 26-27",
      area: 33970,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/houston-texas/2018/400x250/houston-temple04.jpg"
    },
    {
      templeName: "Manhattan New York",
      location: "New York, United States",
      dedicated: "2004 June 13",
      area:20630 ,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manhattan-new-york/400x250/manhattan-temple-lds-246601-wallpaper.jpg"
    },
    {
      templeName: "Madrid Spain",
      location: "Spain",
      dedicated: "1999 March 19-21",
      area: 45800,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-mormon-temple-954942-wallpaper.jpg"
    },
    {
      templeName: "Rome Italy",
      location: "Italy",
      dedicated: "2019 March 10-12",
      area: 41010,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/6-Rome-Temple-2160338.jpg"
    }

  ]

function renderTempleCards(filteredTemples) {
  const container = document.getElementById("temple-cards");
  container.innerHTML = ""; 

  filteredTemples.forEach(temple => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");

      // Set content
      name.textContent = temple.templeName;
      location.textContent = temple.location;
      dedication.textContent = temple.dedicated;
      area.textContent = "Area: " + temple.area + " sq ft";
      img.src = temple.imageUrl;
      img.alt = temple.templeName + " Temple"; // Add alt text for accessibility
      img.setAttribute("loading", "lazy")

      // Append elements to card in the desired order
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      // Append card to container
      container.appendChild(card);
  });
}

// Initial render of all temples
renderTempleCards(temples);

// Event listener for filtering
document.querySelector("#grand").addEventListener("click", () => {
  const largeTemples = temples.filter(temple => temple.area > 90000); // Adjust area threshold as needed
  renderTempleCards(largeTemples);
});

document.querySelector("#petit").addEventListener("click", () => {
  const smallTemples = temples.filter(temple => temple.area <= 10000); 
  renderTempleCards(smallTemples);
});

document.querySelector("#vieu").addEventListener("click", () => {
  const oldTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]); 
      return year < 1900; 
  });
  renderTempleCards(oldTemples);
});

document.querySelector("#chaks").addEventListener("click", () => {
  const newTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]); 
      return year > 2000; 
  });
  renderTempleCards(newTemples);
});



document.querySelector("#tout").addEventListener("click", () => {
  renderTempleCards(temples);
});
