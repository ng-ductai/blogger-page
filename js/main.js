$(document).ready(function () {
    const responsive = {
        0: {
            items: 1
        },
        320: {
            items: 1
        },
        560: {
            items: 2
        },
        960: {
            items: 3
        }
    }
   
    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        responsive:responsive
    });

    // AOS Instance
    AOS.init();
});

$(document).ready(function(){

    $('#header-menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.header-navbar').toggleClass('nav-toggle');
    });

});


const scrollTop = document.querySelector(".footer-move-up");

   window.addEventListener("scroll", function(e) {
       if (this.scrollY >= 800) {
           scrollTop.classList.add("scrolltop-active");
       } else {
           scrollTop.classList.remove("scrolltop-active");
       }
   });