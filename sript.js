 let button = document.querySelector(".button");

        button.addEventListener("click", () => {
            button.classList.add("active");

            setTimeout(() => {
                button.classList.remove("active");
                document.querySelector("i").classList.replace("bx-cloud-download", "bx-check-circle");
                document.querySelector(".button-text").innerText = "Concluído";
            }, 6000)

            setTimeout(() => {
                button.classList.add("remove");
                document.querySelector("i").classList.replace("bx-check-circle", "bx-cloud-download");
                document.querySelector(".button-text").innerText = "Download";
            }, 9000)

            setTimeout(() => {
                button.classList.remove("remove");
            }, 9080)
        })
       //PARTE 1 = SELECIONAR A QUERY
const sectionClass = document.querySelectorAll('.scroll-js')

//método de pegar a altura da tela 
const metadeTela = window.innerHeight * 0.8;

//SCROLL FUNCTION
function efeitoScroll(){


    //criar loop para verificar cada elemento
    sectionClass.forEach((sectionClass)=>{
        //método para  calcular a distancia do elemento ao eixo y.
        const distanciaTop = sectionClass.getBoundingClientRect().top - metadeTela
        if(distanciaTop <= 0){
            sectionClass.classList.add('ativo')
        }
    })    
}


//ATIVAR A FUNÇÃO DE ACORDO COM O EVENTO.
window.addEventListener('scroll', efeitoScroll)



//Menu Hamburguer
const btn = document.getElementById('btn')

function menuHamburg(){

const nav = document.getElementById('nav')
   nav.classList.toggle('active')

}

btn.addEventListener('click', menuHamburg)
//slides 
let count = 1;
document.getElementById("radio1").checked = true

setInterval( function() {
    nextimage();

}, 5000)

function nextimage(){
    count++;
    if (count>4) {
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}
//slide
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

