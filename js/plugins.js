jQuery(function($) {
    'use strict';

$(document).ready(function() {
    
// -------------------------------------------------------------
// NiceScroll Initailization
// ------------------------------------------------------------- 

    $("body").niceScroll({
        cursorcolor: "#1EBEF0",
        cursorwidth: "5px",
        cursorborder: "1px solid #1EBEF0",
        cursorborderradius: "0px",
        zindex: "9999",
        scrollspeed: "60",
        mousescrollstep: "40"
    });


// -------------------------------------------------------------
// Countdown Time Setup
// -------------------------------------------------------------

$('.countdown').downCount({
    date: '06/10/2016 12:00:00',
    offset: +10
}, function () {
    alert('WOOT WOOT, done!');
});

// -------------------------------------------------------------
// WOW setup
// -------------------------------------------------------------        
    
jQuery(function ($) {
        var wow = new WOW({
        mobile:       false
        });
        wow.init();
    }());


// -------------------------------------------------------------
// MailChimp
// ------------------------------------------------------------- 

$('#mc-form').ajaxChimp({ 
    url: 'http://doelit.us10.list-manage.com/subscribe/post?u=b02e4f21e264536eff4820875&amp;id=4d57faf2cb' 
    /* Replace Your AjaxChimp Subscription Link */
});


});

// niceScroll || scrollbars resize
$("body").getNiceScroll().resize();

// -------------------------------------------------------------
// Google Map Customization
// -------------------------------------------------------------

(function() {

    var map;
    map = new GMaps({
        el: '#map-wrapper',
        lat: 23.475719, //Replace Here Location Google Map Lat
        lng: 91.137101, //Replace Here Location Google Map Lng
        scrollwheel:false,
        zoom: 16,
        zoomControl : true,
        panControl : true,
        streetViewControl : true,
        mapTypeControl: false,
        overviewMapControl: false,
        clickable: true
    });

    var image = '';
    map.addMarker({
        lat: 23.475719, //Replace Here Location Google Map Lat
        lng: 91.137101, //Replace Here Location Google Map Lat
        icon: image,
        animation: google.maps.Animation.DROP,
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
        backgroundColor: '#d9d9d9',
    });


    var styles = [ 

    {
        "featureType": "road",
        "stylers": [
        { "color": "#ffffff" }
        ]
    },{
        "featureType": "water",
        "stylers": [
        { "color": "#99b3cc" }
        ]
    },{
        "featureType": "landscape",
        "stylers": [
        { "color": "#f2efe9" }
        ]
    },{
        "elementType": "labels.text.fill",
        "stylers": [
        { "color": "#d3cfcf" }
        ]
    },{
        "featureType": "poi",
        "stylers": [
        { "color": "#bfbfbf" }
        ]
    },{
        "elementType": "labels.text",
        "stylers": [
        { "saturation": 1 },
        { "weight": 0.1 },
        { "color": "#000000" }
        ]
    }

    ];

    map.addStyle({
        styledMapName:"Styled Map",
        styles: styles,
        mapTypeId: "map_style"  
    });

    map.setStyle("map_style");



}());



});