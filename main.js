$(document).ready( function() {
  var lastScrollTop = 0;
  $(@pageContainer).scroll(function () {
    var currentScrollPosition = $(this).scrollTop();
    if (currentScrollPosition > lastScrollTop) {
      $(@lap1).background-color("red");
    }
    else {
      $(@lap1).background-color("blue");
    }
    lastScrollTop = currentScrollPosition;
  });

});






  // alert("ready"))
