const departments = [
    {
      
      name: "Tech",
      
    },
    {
      
      name: "Transport",
      
    },
    {
     
      name: "Commerce",
     
    },
    {
     
      name: "Real Estate",
      
    },
    {
      
      name: "Other",
      
    }
  ];
  
 function populatedepartments(){
    departments.forEach(department => {
        const dept = document.querySelector('select');
        if (dept) {
            const add = document.createElement('option');
            add.textContent = department.name;
            dept.appendChild(add);
        }
    });
 }
 populatedepartments();

 let openbtn = document.getElementById('open-btn');
 let modalcontainer = document.getElementById('modal-container');
 let closebtn = document.getElementById('close-btn');

 openbtn.addEventListener('click', function(){
    modalcontainer.style.display = 'block';
 });

 closebtn.addEventListener('click', function(){
  modalcontainer.style.display = 'none';
});

window.addEventListener('click', function(e){
  if (e.target === modalcontainer) {
    modalcontainer.style.display = 'none';
  }
});
