jQuery(function($) {
    'use strict';


//jQuery to collapse the navbar on scroll
$('body').scrollspy({ target: '.vertical-nav' })
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



/*
================================================
	Document Ready Fuction
===============================================
 */


$(document).ready(function(){

    // Vertical Menu
    $('.tt-one').tooltip('hide');
	$('.tt-two').tooltip('show');
	$('.tt-three').tooltip('hide');
	$('.tt-four').tooltip('hide');
	$('.tt-five').tooltip('hide');
	$('.tt-').tooltip('hide');
});



/*
================================================
	Load Function
===============================================
 */

(function() {
	 $(window).on('load', function() {

	 	// Preloader
		$(".preloader").fadeOut("slow");

		// Vertical menu
		$('.tt-one').hover(function(){
			$('.tt-one').tooltip('show');
		});
		$('.tt-three').hover(function(){
			$('.tt-three').tooltip('show');
		});
		$('.tt-four').hover(function(){
			$('.tt-four').tooltip('show');
		});
		$('.tt-five').hover(function(){
			$('.tt-five').tooltip('show');
		});
		$('.tt-six').hover(function(){
			$('.tt-six').tooltip('show');
		});

	});
}());




});