// mobile nav hamburger
;$(function(){
	var hamburgerWrap = $('#navbar-mobile-wrapper'),
		hamburger = $('.navbar-mobile-hamburger'),
		menu = $('#navbar-menu-wrapper'),
		navbar = $('#navbar'),
		body = $('body'),
		toggleMenu = function(){
			menu.toggleClass('js-active')
		},
		toggleHamburger = function(){
			hamburger.toggleClass('js-active')
		};

	hamburgerWrap.on(
		'click',toggleMenu
	);
	hamburgerWrap.on(
		'click',toggleHamburger
	);
	hamburgerWrap.on(
		'click',function(){navbar.toggleClass('js-active-modal')}
	);
	hamburgerWrap.on(
		'click',function(){body.toggleClass('js-active-overflow')}
	);
})

// shrink navbar while scrolling
;$(function(){
	var navbar = $('.navbar-container'),
		whileScrolling = function(){
			var screen = $(window).scrollTop(),
				offset = $('.container-main').offset().top;
			
			if(screen - offset >= 0){
				navbar.addClass('js-active-scrolling');
			} else {
				navbar.removeClass('js-active-scrolling');
			}
		};

	$(document).on(
		'scroll', whileScrolling
	);
})

// smooth scroll
;$(function() {
	var menu = $('#navbar-menu-wrapper'),
		hamburger = $('.navbar-mobile-hamburger'),
		topNavHeight = $('#navbar > .navbar-container').height(),
		navbar = $('#navbar'),
		body = $('body');

	$('.smooth-scroll-link').click(function() {
		menu.removeClass('js-active');
		hamburger.removeClass('js-active');
		navbar.removeClass('js-active-modal');
		body.removeClass('js-active-overflow');

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top-topNavHeight/2
		}, 1000);

		return false;
	});
})

// readmore
;$(function(){
	var readmoreContainer = $('.readmore-container'),
		readmoreAddClass = function(){
			$(this).prev('.readmore-container').slideToggle(500,function(){
				$(this).next('.readmore-button').remove();
				$(this).addClass('js-visible');
			});
		}

	$('.readmore-button').on(
		'click', readmoreAddClass
	)
})

