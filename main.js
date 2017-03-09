

// Content controls slideout mobile nav
$('.mobile-header-top_ham').on('click', function() {
	$('.header').toggleClass('header-hide');
});

$('.nav-link_item_inner_hide').on('click', function() {
	$('.header').toggleClass('header-hide');
});
// ################

// Controls Staff Pick Slider
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var dots = document.getElementsByClassName("staff-item-card-dot");
    var slides = document.getElementsByClassName("staff-item-card_slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 7000); // Change image every 2 seconds
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex-1].className += " active";
}
// ################
