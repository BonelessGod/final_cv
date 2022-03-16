// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 30) {
    document.getElementById("headerShrink").style.fontSize = "small";
    document.getElementById("headerShrink").style.height = "50%";
    document.getElementById("photo").style.width = "20%"
    document.getElementById("titleName").style.fontSize = "large";
  } else {
    document.getElementById("headerShrink").style.fontSize = "large";
    document.getElementById("headerShrink").style.height = "100%";
    document.getElementById("photo").style.width = "35%"
    document.getElementById("titleName").style.fontSize = "xx-large";
  }
}