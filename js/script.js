$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay : true,
    autoplayTimeout : 4000,
    smartSpeed: 700,
    nav:true,
    responsive:{
        320:{
            items:1
        },
        789:{
            items:1
        }
    }
})

let btn = document.getElementById("btn");
let form = document.getElementById("form");
let close = document.getElementById("close");


btn.addEventListener("click", func);
close.addEventListener("click", fun);

function func(event) {
    console.log(event);
    form.classList.toggle("form_active");
}

function fun(event) {
    console.log(event);
    form.classList.remove("form_active");
}