
$(document).ready(function(){



    $(".slider").slick({
        arrows: true,
        dots:false,
        slidesToShow:5,
        slidesToScroll:1,
        infinite:false,
        centerMode: false,
        virableWidth:false, 
        responsive: [
            {
                breakpoint: 1430,
                settings: {
                    slidesToShow:4,
                },

               
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow:3,
                },

               
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow:2,
                },

               
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow:1,
                },

               
            },

        ],
        
        
    });

    $(".plan-slider").slick({
        arrows: true,
        dots:false,
        slidesToShow:5,
        slidesToScroll:1,
        infinite:false,
        centerMode: false,
        virableWidth:false, 
        responsive: [
            {
                breakpoint: 1430,
                settings: {
                    slidesToShow:4,
                },

               
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow:3,
                },

               
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow:2,
                },

               
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow:1,
                },

               
            },

        ],
        
        
    });

    // Attaching the event listener function to window's resize event
    // window.addEventListener("resize", displayWindowSize);
    
    // // Calling the function for the first time
    // displayWindowSize();

    
    
    

});




function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    if(w <= 1430) {

        $(".projects-slider").slick({
   
            responsive: [
                {
                    breakpoint: 1430,
                    settings: {
                        slidesToShow:2,
                        
                    },
    
                   
                },
                // {
                //     breakpoint: 1280,
                //     settings: {
                //         slidesToShow:3,
                //     },
    
                   
                // },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow:1,
                        
                    },
    
                   
                },
                // {
                //     breakpoint: 700,
                //     settings: {
                //         slidesToShow:1,
                //     },
    
                   
                // },
    
            ],
            
            
        });

    } 
    
}

function execs(){
    if(screen.width <= 1430) {

        $(".projects-slider").slick({
   
            responsive: [
                {
                    breakpoint: 1430,
                    settings: {
                        slidesToShow:2,
                        
                    },
    
                   
                },
                // {
                //     breakpoint: 1280,
                //     settings: {
                //         slidesToShow:3,
                //     },
    
                   
                // },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow:1,
                        
                    },
    
                   
                },
                // {
                //     breakpoint: 700,
                //     settings: {
                //         slidesToShow:1,
                //     },
    
                   
                // },
    
            ],
            
            
        });

      }
 
}


