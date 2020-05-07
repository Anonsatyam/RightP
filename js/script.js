jQuery(function ($) {

    // Javascript Code For DropDown On Desktop & Hamberger Menu On Mobile Screen
    $(function () {
        $('nav ul li').hover(function (e) {
            $(this).children('ul').stop(true, false, true).fadeToggle(300);
        });
        // $('#nav-toggle').click(function () {
        //     $('ul.nav-dropdown').hide();
        //     $('ul.nav-dropdown').show();
            
        // });
        $('#nav-toggle').on('click', function () {
            this.classList.toggle('active');
        });
        $('#nav-toggle').click(function () {
            $('nav ul').toggle();
        });
        $('#nav-toggle').click(function () {
            e.preventDefault();
            $('ul.nav-dropdown').toggle();
        });
        // $('#nav-toggle').click(function () {
        //     $('.nav-dropdown').toggle();
        // });
    });
});

$(document).ready(function () {
    $('#job-opening .card').slice(0, 3).show();
    $('#loadMore').click(function (e) {
        $('#job-opening .card:hidden').slice(0, 3).slideDown();
        e.preventDefault()
        if ($('#job-opening .card:hidden').length == 0) {
            $('#loadMore').fadeOut(1000);
        }
    });
});