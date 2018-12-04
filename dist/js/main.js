$(document).ready(function() {
    $('#pagepiling').pagepiling({
	    scrollingSpeed: 700,
        easing: 'swing',
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['Awards', 'January', 'February']
        }
    });
});