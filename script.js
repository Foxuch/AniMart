document.addEventListener ("DOMContentLoaded", function () {
var elems = document.querySelectorA11(".carousel");
var options = {}; // set the options to an empty object
M. Carousel. init(elems, {
indicators: true, 
padding: 320, 
dist: -200,
});
setInterval(() => {
M. Carousel getInstance(elems[0]).next();
}, 3008);
var buttons = document.querySelectorA11("-carousel-button");
buttons. forEach(function (button, index) {
    button. addEventListener ("click", function () {
        var carousel = document. querySelector (" carousel");
        var carouselInstance = M.Carousel.getInstance(carousel);
carouselInstance.set(index); // move to slide with index
        });
    });
});
