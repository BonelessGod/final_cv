// JQuery js file
// Version: 1.2.0
// Date: 06-04-2022

/* This script will shrink the header when the user scrolls down.
  * It will also restore the header when the user scrolls up.
  * It will add "shrink" class to the header tag when the user scrolls down
  * It will add "shrinked" class to headerContent class when the user scrolls down
  * It will remove "shrink" class from headerContent class when the user scrolls up
  * and remove the "shrink" class when the user scrolls up.
  * scrolls amount needed for shrink the header is decided by the "shrinkScrollY" variable. */

// listen to the user's scroll event
$(window).scroll(function() {
  if ($(window).scrollTop() > shrinkScrollY) {
    // shrink the header
    $('header').addClass('shrink');
    $('.headerContent').addClass('shrinked');
  } else {
    // restore the header
    $('header').removeClass('shrink');
    $('.headerContent').removeClass('shrinked');
  }
});
