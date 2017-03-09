
$('#filter').on('click', function() {
	$('#filter').toggleClass('filter_show');
});

$('.filter-popup').on('click', function() {
    console.log('click');
	$('#filter').toggleClass('filter_show');
});

var acc = document.getElementsByClassName("filter-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}
function clearform() {
    document.getElementById("filter-form").reset();
}