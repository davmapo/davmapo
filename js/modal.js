// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img01 = document.getElementById("myImg01");
var img02 = document.getElementById("myImg02");
var img03 = document.getElementById("myImg03");
var img04 = document.getElementById("myImg04");
var img05 = document.getElementById("myImg05");
var img06 = document.getElementById("myImg06");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function clicca(immagine){
  var img = immagine;
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

img01.onclick = function(){
  clicca(img01);
}
img02.onclick = function(){
  clicca(img02);
}
img03.onclick = function(){
  clicca(img03);
}
img04.onclick = function(){
  clicca(img04);
}
img05.onclick = function(){
  clicca(img05);
}
img06.onclick = function(){
  clicca(img06);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}