
let hideText_btn = document.getElementById('hideText_btn');

let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle ('show');


if (hideText.classList.contains ('show')) {
    hideText_btn.innerHTML= 'leer menos';
}
 else {
    hideText_btn.innerHTML= 'Leer mas';
    }
}

function vermas(id){
    if(id=="mas"){
    document.getElementById("desplegar").style.display="block";   
    document.getElementById("mas").style.display="none"; 
    }
    else{
    document.getElementById("desplegar").style.display="none";
    document.getElementById("mas").style.display="inline";
    }
    }

    

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        btnSwitch.classList.toggle('active');
    });

