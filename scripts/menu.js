$(document).ready(function () {

    $('#menu-icon').click(function () {

        // Check if open - close, else open
        if ($('#side-menu').css('left') == '0px') {
            $('#side-menu').css('left', '-16em');
        } else {
            $('#side-menu').css('left', '0px');
        }

    });

    // On window resize close menu
    $(window).resize(function () {
       $('#side-menu').css('left', '-16em');
    });

});
