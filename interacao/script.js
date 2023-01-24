let slides = document.querySelectorAll('.slide-clt');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

setInterval(next, 7000);
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