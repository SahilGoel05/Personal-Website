$(document).ready(function(){
    // Mobile menu functionality activation
    respNav('#menu');

    // This function closes the mobile side menu when clicked anywhere outside of the menu
    $('html').on('click tap', function(event) {
        if ($('body').is('.shifted')) {
            if ((event.target.nodeName.toLowerCase()!='header') && ( $(event.target).parents('header').length == 0 )) {
                mobeliMenuToggle();
            }
        } else if ($('body').is('.home') && $('#menuTrigger').is(':visible')) {
            mobeliMenuToggle();
        }
    });

});

// mobile menu button activation
respNav = function(menu) {
    $('#menuTrigger').append('<b></b><b></b><b></b>').on('click', function(event) {
        event.stopPropagation();
        mobeliMenuToggle();
    });
}

mobeliMenuToggle = function() {
 jQuery('body').toggleClass('shifted');
}
