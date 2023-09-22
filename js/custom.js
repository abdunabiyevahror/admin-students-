(function ($) {
    "use strict";
    $(document).ready(function () {
        $('.mobile-menu-toggle').on('click', function () {
            $('.student-sidebar').addClass('show-sidebar');
            $('body').toggleClass('menu-has-opened');
        });
        /*$('.mobile-menu-close').on('click', function () {
            $('.student-sidebar').addClass('show-sidebar');
            $('body').toggleClass('menu-has-opened');
        });*/
        $('.mobile-menu-overlay').on('click', function () {
            $('.student-sidebar').removeClass('show-sidebar');
            $('body').removeClass('menu-has-opened');
        });
        /*$('.mobile-menu-close').on('click', function () {
            $('.student-sidebar').removeClass('show-sidebar');
            $('body').removeClass('menu-has-opened');
        });*/

    });
})(jQuery);