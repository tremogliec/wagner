$(document).ready(function(){
  $(".form-ul").hide();
  $(".div_dropdown_container").click(function(){
    $(".form-ul").toggle(300);    
  });

  $('.form-ul-li').on("click", function(){
    var a = $(this).html();
    $('.form_input_title').text(a);
    $('.type').val(a);
    $(".form-ul").hide();
    $('.form_input_title');
	});
});

$(document).ready(function(){
  $(".div_dropdown_list2").hide();
  $(".div_dropdown_container2").click(function(){
    $(".div_dropdown_list2").toggle(300);  
  });
});


function showImage(imgName) {
     var curImage = document.getElementById('main-image');
     var thePath = 'img/';
     var theSource = thePath + imgName;
     curImage.src = theSource;
     curImage.alt = imgName;
     curImage.title = imgName;
}

  $(function() {
    $(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});
  });


