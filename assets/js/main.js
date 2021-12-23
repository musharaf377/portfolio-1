$(document).ready(function () {
    /* sticky menu */
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 20){
          $('.header-area').addClass('stikey');
        }else{
          $('.header-area').removeClass('stikey')
        }
      })

      /* type js active */
      $(".typed").typed({
		strings: ["Web Designer.", "Web Developer.", "Full stack web Developer.", 'Graphics Designer'],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 100,
		// time before typing starts
		startDelay: 1000,
		// backspacing speed
		backSpeed: 50,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 100,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});

     /* progress bar js */
     $('.demo').progressBar({
        percentage :true,
        animation :true,
        height :"7",
        barColor :"#ed143d",
        shadow :true,
    });

     /* isotop active */ 
     var $grid = $('.portfolio-items').isotope({
        // options
    });
    // filter items on button click
    $('.project-btn').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    /* popup video active */
    $(document).ready(function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });

    /* counter up active */
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    
    /* testimonial slide active */
    $('.testimonial').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    });

    /* mobile menu */
    $("#js-hamburger").click(function () {
        $("#js-top-line").toggleClass("active");
        $("#js-center-line").toggleClass("active");
        $("#js-bottom-line").toggleClass("active");
        $("#js-nav").toggleClass("show");
      });
    
});