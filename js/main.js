$(window).load(function() {
  $('.triangles').fadeOut('slow');
  $('#preload ').delay(500).fadeOut('slow');
});


$(document).ready(function() {


   $('.slide').slick({
      arrows: true,
   });


   $("html").niceScroll({
      cursorcolor:"#0288D1",
      scrollspeed :"120",
      cursorborder:"1px solid #0288D1",
      horizrailenabled: "false",
      cursorborderradius: "0px"
    });

});
