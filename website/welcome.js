
function sayWelcome() {
    const name = document.getElementById("name").value;
    alert(`Welcome, ${name}!`);
  }

  function changeColor(color) {
    var text = document.getElementById("text");
    text.style.color = color;
  }

var getStartedButton = document.getElementById("get-started");

getStartedButton.addEventListener("mouseover", function() {
  var color = getRandomColor();
  getStartedButton.style.backgroundColor = color;
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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
  slides[slideIndex-1].style.display = "block";
}