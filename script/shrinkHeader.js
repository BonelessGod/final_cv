// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

const photoCSSAttribute = document.getElementById("photo"), 
    photoOriginalWidth = getComputedStyle(photo, null).width,
    photoOriginalHeight = getComputedStyle(photo, null).height;

const photoScrolledWidth = photoOriginalWidth.replace(/px/, "") * 0.6 + "px";
const photoScrolledHeight = photoOriginalHeight.replace(/px/, "") * 0.7 + "px";

function scrollFunction() {
  if (document.documentElement.scrollTop > 30) {

    document.getElementById("photo_info").style.height = photoScrolledHeight;
    document.getElementById("photo").style.width = photoScrolledWidth;
    
    document.getElementById("titleName").style.fontSize = "large";

  } else {
    
    document.getElementById("photo_info").style.height = photoOriginalHeight;
    document.getElementById("photo").style.width = photoOriginalWidth;
    document.getElementById("titleName").style.fontSize = "xx-large";

  }
}
