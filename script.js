window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 10) {
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

// function changeImage() {
//   var image = document.getElementById("vizitka");
//   if (image.src.match("Vizitka")) {
//     image.src = "Vizitka";
//   } else {
//     image.src = "Vizitka";
//   }
//   image.classList.toggle("enlarged");
// }
