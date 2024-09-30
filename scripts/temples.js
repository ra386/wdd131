
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


  