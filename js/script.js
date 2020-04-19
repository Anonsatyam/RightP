jQuery(function ($) {

    // Javascript Code For DropDown On Desktop & Hamberger Menu On Mobile Screen
    $(function () {
        $('nav ul li').hover(function (e) {
            $(this).children('ul').stop(true, false, true).fadeToggle(300);
        });
        $('html').click(function () {
            $('.nav-dropdown').hide();
        });
        $('#nav-toggle').on('click', function () {
            this.classList.toggle('active');
        });
        $('#nav-toggle').click(function () {
            $('nav ul').toggle();
        });
    });
});