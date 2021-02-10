/* ========================================================================= */
/*	Page Preloader
/* ========================================================================= */

$(window).on('load', function () {
	setTimeout(()=>{
		$('.l-preloader').addClass("done");
		$('.preloader').fadeOut(100);	
	},1000);
});

$(".cta-btn").click(function(){
	$(".cta").addClass("show");
});
$(".cta-close").click(function(){
	$(".cta").removeClass("show");
});

jQuery(function ($) {
	"use strict";
	/* ========================================================================= */
	/*	center banner elevator title
	/* ========================================================================= */
	if($(document).width() > 993) { 
		var maxWidth = 0;
		var sum = 0;
		var amount = 0;
		var widestSpan = null;
		var $element;
		$(".rw-words span").each(function(){
			$element = $(this);
			sum += $element.width();
			amount ++;
			if($element.width() > maxWidth){
				maxWidth = $element.width();
				widestSpan = $element; 
			}
		});	
		
		$(".first").css("margin-left",-(sum/amount));
	} else {
		$(".first").css("margin-left","0");
	}

	$( window ).resize(function() {
		if($(document).width() > 993) { 
			var maxWidth = 0;
			var sum = 0;
			var amount = 0;
			var widestSpan = null;
			var $element;
			$(".rw-words span").each(function(){
				$element = $(this);
				sum += $element.width();
				amount ++;
				if($element.width() > maxWidth){
					maxWidth = $element.width();
					widestSpan = $element; 
				}
			});	
			
			$(".first").css("margin-left",-(sum/amount));
		} else {
			$(".first").css("margin-left","0");
		}
	});


	/* ========================================================================= */
	/*	lazy load initialize
	/* ========================================================================= */

	const observer = lozad(); // lazy loads elements with default selector as ".lozad"
	observer.observe();

	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});

	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});

		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}

	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */

	$("#testimonials").slick({
		infinite: true,
		lazyLoad: 'ondemand',
		arrows: true,
		prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right"></i></button>',	
		autoplay: true,
		autoplaySpeed: 4000
	});

	/* ========================================================================= */
	/*	animation scroll js
	/* ========================================================================= */
	$(function() {
		$('nav a, .page-scroll, footer a[href="#body"').click(function() {
		  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			console.log(target)
			console.log(target.offset().top-50)
			if (target.length) {
			  $('html,body').animate({
				scrollTop: target.offset().top-50
			  }, 1000);
			  return false;
			}
		  }
		});
	  });

	// easeInOutExpo Declaration
	jQuery.extend(jQuery.easing, {
		easeInOutExpo: function (x, t, b, c, d) {
			if (t === 0) {
				return b;
			}
			if (t === d) {
				return b + c;
			}
			if ((t /= d / 2) < 1) {
				return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			}
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}
	});

	/* ========================================================================= */
	/*	counter up
	/* ========================================================================= */
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});


	/* ========================================================================= */
	/*	onscroll navigation
	/* ========================================================================= */
	$(window).scroll(function() {
        if($(document).scrollTop() > 50){
            $('.navigation').addClass('onscroll');
        }else{
            $('.navigation').removeClass('onscroll');
        }
    });

    if($(document).scrollTop() > 50){
        $('.navigation').addClass('onscroll');
    }else{
        $('.navigation').removeClass('onscroll');
	}
	
	//add class nav-shown to body when mobile nav is displayed
	$(".navbar-toggler").click(function(){
		if($("#navigation").hasClass("show") == false) {
			$("body").addClass("nav-shown");
		}else {
			$("body").removeClass("nav-shown");
		}
	});

	if($(document).width() < 768) {
        $('#navigation a').on('click', function(){
			$('.navbar-collapse').collapse('hide');
			$("body").removeClass("nav-shown");
        });
    }
});


