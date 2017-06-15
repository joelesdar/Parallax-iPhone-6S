const $iphone = document.getElementById("iphone");
const $mask = document.getElementById("mask");

window.addEventListener("scroll", function(e) {
  var position = 54 + window.scrollY;
  $mask.style.backgroundPosition = "-" + position + "px";
  $iphone.style.transform = "rotate(-"+ position*0.03 + "deg)"
});
