var typed = new Typed('#suite', {
    strings: ["Fireworks.", "Designer.", "Developper."],
    typeSpeed: 50,
    loop: true
});



$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1
    });
});



$(function() {
    $.scrollIt({
        easing: 'ease', // the easing function for animation
        scrollTime: 1000, // how long (in ms) the animation takes
        topOffset: 0 // offste (in px) for fixed top navigation
    });
});



$(document).ready(function() {
    $("#icone").on('click', function() {
        $(".menunav").toggleClass('burger')
    })

})

$grid = $("#parent").isotope({
    itemSelector: '.imageunique',
    layoutMode: 'fitRows'
});

$("#all_filter").on("click", function() {
    $grid.isotope({ filter: '*' });
    $(".lien").removeClass("active");
    $("#all_filter").addClass("active");
})

$("#js_filter").on("click", function() {
    $grid.isotope({ filter: '.js' });
    $(".lien").removeClass("active");
    $("#js_filter").addClass("active");
})

$("#css_filter").on("click", function() {
    $grid.isotope({ filter: '.css' });
    $(".lien").removeClass("active");
    $("#css_filter").addClass("active");
})

$("#php_filter").on("click", function() {
    $grid.isotope({ filter: '.php' });
    $(".lien").removeClass("active");
    $("#php_filter").addClass("active");
})