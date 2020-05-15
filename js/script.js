jQuery(function ($) {

    // Javascript Code For DropDown On Desktop & Hamberger Menu On Mobile Screen
    $(function () {
        $('nav ul li').hover(function (e) {
            $(this).children('ul').stop(true, false, true).fadeToggle(300);
        });
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

var ctrl = new ScrollMagic.Controller();

// Create scenes in jQuery each() loop
$("section").each(function (i) {
    var inner = $(this).find(".inner");
    var outer = $(this).find(".outer");
    var tl = new TimelineMax();

    tl.from(outer, 0.25, {
        scaleX: 0
    });
    tl.from(inner, 0.65, {
        yPercent: 100,
        ease: Back.easeOut
    });

    new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.15
        })
        .setTween(tl)
        .addIndicators({
            colorTrigger: "white",
            colorStart: "white",
            colorEnd: "white",
            indent: 40
        })
        .addTo(ctrl);
});