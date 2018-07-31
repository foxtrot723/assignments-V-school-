jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > 330) {
        jQuery('.logo-box-small').fadeIn();
      } else {
        jQuery('.logo-box-small').fadeOut();
      }
    });
  });

  jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > 380) {
        jQuery('#icons-container').fadeIn();
      } else {
        jQuery('#icons-container').fadeOut();
      }
    });
  });

  jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > 348) {
        jQuery('#Etna-title').fadeIn();
      } else {
        jQuery('#Etna-title').fadeOut();
      }
    });
  });


  $(window).scroll(function () {
    var elem = $('#icons-container');
    setTimeout(function() {  
    elem.css({"opacity":"0.1","transition":".2s"});
    },4000);            
    elem.css({"opacity":"1","transition":".2s"}); 
});


$('#arrow-up').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

