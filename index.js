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