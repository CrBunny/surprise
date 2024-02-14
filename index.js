$(document).ready(function () {
    const bad = $('.image');
  
        
    $(".no").click(() => {
        let currentWidth = parseInt($(".yes").width());
        let currentHeight = parseInt($(".yes").height());
        $(".yes").width(currentWidth + 10);
        $(".yes").height(currentHeight + 10);
      });

              
    $(".yes").click(() => {
        $(".yes").width(50);
        $(".yes").height(40);
        $('.question').text('I Love u so much!');
        $('.image').removeClass("active");
        $('.great').addClass("active");
        $('.background').addClass("background-active");

      });
});

