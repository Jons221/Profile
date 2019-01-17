var filterizd = $('.filtr-container').filterizr({
});

$('[data-filter="all"]').click(() => {
    $('[data-multifilter]').prop('checked', false);
})

new WOW().init();

// $(window).on('scroll', function() {
//     if ($(window).scrollTop()){
//         $('navbar').addClass('black');
//     }
//     else{ $('navbar').removeClass('black');
// }
// })
var $window = $(window);
var $elem = $(".animation")

    function isScrolledIntoView($elem, $window) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }


$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        $elem.addClass("animate")
       
    }
});

















