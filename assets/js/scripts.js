$(window).ready(() => {

    
    // change header height after scroll change
    if ($('.nav-bar').length > 0) {
        var navbar = $('.nav-bar')
        $(window).scroll(() => {
            var top = $(window).scrollTop()
            if (top > 0) {
                if (!navbar.hasClass('moved')) navbar.addClass('moved')
            } else {
                if (navbar.hasClass('moved')) navbar.removeClass('moved')
            }
        })
    }
    //////////////////////



    // mobile menu
    if ($('.nb-menu-wrapper').length > 0) {
        var menu = $('.nb-menu-wrapper')
        var menuBtn = $('.nb-mobile-menu-toggler')
        var menuCloseBtn = $('.nb-close-menu')
        var menuShadow = $('.mobile-menu-shadow')
        menuBtn.click(function() {
            openMenu()
        })
        menuCloseBtn.click(function() {
            closeMenu()
        })
        menuShadow.click(function() {
            closeMenu()
        })
        function openMenu() {
            if (!menu.hasClass('open'))
                menu.addClass('open')
        }
        function closeMenu() {
            if (menu.hasClass('open'))
                menu.removeClass('open')
        }
    }
    ////////////////////


    // open all fields in personalize
    if ($('.open-per').length > 0) {
        $('.open-per').click(function() {
            $('.per-more').removeClass('d-none')
            $(this).parent().addClass('d-none')
        })
    }
    ///////////////////////////



    // date range picker
    if ($('.range-picker').length > 0) {
        $('.range-picker').daterangepicker({
            opens: 'left'
        })
    }
    ////////////////////////


    // 
    if ($('.tf-select').length > 0) {
        $('.tf-select').select2()
    }
    ///////////////////////

})