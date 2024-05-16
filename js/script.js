
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

    $(".projects-slider").slick({
        arrows: true,
        dots:false,
        slidesToShow:2,
        slidesToScroll:1,
        infinite:false,
        centerMode: false,
        virableWidth:false, 
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow:1,
                },

               
            },
            {
                breakpoint: 495,
                settings: {
                    slidesToShow:1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: false,
                },

               
            },

        ],
        
        
    });

    $(".list_services_flex").slick({
        arrows: true,
        dots:false,
        slidesToShow:3,
        slidesToScroll:1,
        infinite:false,
        centerMode: false,
        virableWidth:false, 
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow:2,
                },

               
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow:1,
                    // autoplay: true,
                    // autoplaySpeed: 2000,
                    // arrows: false,
                },

               
            },

        ],
        
        
    });

   
    

});





