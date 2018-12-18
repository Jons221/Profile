var filterizd = $('.filtr-container').filterizr({
});

$('[data-filter="all"]').click(() => {
    $('[data-multifilter]').prop('checked', false);
})
new WOW().init();
