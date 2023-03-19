let menuBtn = document.querySelector('#menu-btn');;
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
}

let currentYearEl = document.querySelector('.currentYear');
var currentDate = new Date();
currentYearEl.innerText = currentDate.getFullYear();


