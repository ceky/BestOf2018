$(document).ready(function() {
    $('#pagepiling').pagepiling({
	    scrollingSpeed: 700,
        easing: 'swing',
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['TOP5 Books', 'TOP5 Movies', 'TOP5 Music Artists', 'TOP5 Songs', 'TOP5 Youtube Videos', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        }
    });
});