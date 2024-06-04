window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("small");
  } else {
    header.classList.remove("small");
  }
});

function changeImage() {
  var image = document.getElementById("image");
  if (image.src.match("GymApp.png")) {
    image.src = "new-image.png";
  } else {
    image.src = "GymApp.png";
  }
  image.classList.toggle("enlarged");
}
