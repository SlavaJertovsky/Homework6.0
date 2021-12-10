$(document).ready(function(){
    $('.trends-slider').slick({
      arrows: true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 376,
          settings: {   
            slidesToShow: 1

          }
        }
      ]


      
      
    });
  });