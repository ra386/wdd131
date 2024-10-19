const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;   


  
  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;   



const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function populateProducts() {
  products.forEach(product => {
    const prod = document.querySelector('select');
    if (prod) {
      const add = document.createElement('option');
      add.textContent = product.name;
      prod.appendChild(add);
      
   }
  });
}
populateProducts();


const tic = document.getElementById("submit");
const visits = document.getElementById("count");

let numVisits = Number(window.localStorage.getItem("visit-it")) || 0;

visits.textContent = numVisits ? numVisits : "This is your first visit";

localStorage.setItem("visit-it", ++numVisits);







