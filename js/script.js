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

btn.addEventListener("click", func);

function func(event) {
    console.log(event);
    form.classList.toggle("form_active");
}
