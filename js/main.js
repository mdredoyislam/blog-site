$(document).ready(function(){
    
    
    
            $('.slider-active').owlCarousel({
                loop:true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        nav:true
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:1,
                        nav:false,
                        loop:false
                    }
                }
            })
    

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    
    
    
    
        /* testimonial active */
                    $('.active-testimonial').owlCarousel({
                loop:false,
                responsiveClass:true,
                dots:true,
                responsive:{
                    0:{
                        items:1,
                        nav:true
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:1,
                        nav:false,
                        loop:false
                    }
                }
            })
    
          /*  $('.active-testimonial').slick({
          dots: true,
          infinite: false,
          speed: 300,
        arrows:false,        
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });*/
    
    
});