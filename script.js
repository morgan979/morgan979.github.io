	// Modal
	// Get the modal
	// var modal = document.getElementById('myModal');
	// console.log(modal);

	// // Get the image and insert it inside the modal - use its "alt" text as a caption
	// var img = document.getElementById('myImg');
	// console.log(img)
	// var modalImg = document.getElementById("img01");
	// var captionText = document.getElementById("caption");
	// img.onclick = function(){
	//     modal.style.display = "block";
	//     modalImg.src = this.src;
	//     captionText.innerHTML = this.alt;
	// }

	// // Get the <span> element that closes the modal
	// var span = document.getElementsByClassName("close")[0];

	// // When the user clicks on <span> (x), close the modal
	// // window.onclick = function(event) { 
	// //   modal.style.display = "none";
	// // }
	// modal.addEventListener('click',function(){
	// this.style.display="none";
	// })

	   //  function lightbox(idx) {
    //     //Show the slider wrapper
    //     var ninjaSldr = document.getElementById("ninja-slider");
    //     ninjaSldr.parentNode.style.display = "block";

    //     //Then init the slider
    //     //Note: The { initSliderByCallingInitFunc: true } option in the 
    //     // ninja-slider.js tells the page not to initiate the slider
    //     // unless the following init(idx) function is called.
    //     // nslider.init(idx);

    //     //Then mimic clicking the fullscreen button to popup the modal
    //     var fsBtn = document.getElementById("fsBtn");
    //     fsBtn.click();
    // }

    // function fsIconClick(isFullscreen, ninjaSldr) {
    //     //Note: fsIconClick is the default event handler of the fullscreen button
    //     if (isFullscreen) {
    //         ninjaSldr.parentNode.style.display = "none";
    //     }
    // }


// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

// var modal = document.getElementById('myModal');
// 	modal.addEventListener('click',function(){
// 	this.style.display="none";
// 	})

//Slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}