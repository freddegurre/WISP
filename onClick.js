$("#button").click(function() {
    console.log("click!")
    $('html, body').animate({
        scrollTop: $("#section1").offset().top
    }, 1000);
});

