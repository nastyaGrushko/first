var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$('.sale_slick_box').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.arrow-prev'),
  nextArrow: $('.arrow-next'),
  responsive: [{
    breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
  }]
});

$('.why-we_slider').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow: $('.chevron-left'),
  nextArrow: $('.chevron-right')
});