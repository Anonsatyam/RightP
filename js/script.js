// Form Validation Using RegeX
function myfun() {


    var name = document.getElementById("name");
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var loc = document.getElementById("loc");

    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var phonePattern = /^[6-9]\d{9}$/;

    // Name
    if (name.value == "" || name.value == null) {
        document.getElementById("nameError").innerHTML = "*Enter a valid name";
        document.getElementById("name").style.border = "1px solid red";
        document.getElementById("user").style.color = "red";
        $('#name').addClass('error');
        setTimeout(function () {
            $('#name').removeClass('error');
        }, 300);
    } else {
        document.getElementById("nameError").innerHTML = "";
        document.getElementById("name").style.border = "1px solid #009345"
        document.getElementById("user").style.color = "#009345"
    };

    // Email
    if (emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("email").style.border = "1px solid #009345";
        document.getElementById("envelope").style.color = "#009345";
    } else {
        document.getElementById("emailError").innerHTML = "*Enter a valid email";
        document.getElementById("email").style.border = "1px solid red";
        document.getElementById("envelope").style.color = "red";
        $('#email').addClass('error');
        setTimeout(function () {
            $('#email').removeClass('error');
        }, 300);
    };

    // Phone
    if (phonePattern.test(phone)) {
        document.getElementById("phoneError").innerHTML = "";
        document.getElementById("phone").style.border = "1px solid #009345";
        document.getElementById("square").style.color = "#009345";
    } else {
        document.getElementById("phoneError").innerHTML = "* Enter A Valid Number";
        document.getElementById("phone").style.border = "1px solid red";
        document.getElementById("square").style.color = "red";
        $("#phone").addClass('error');
        setTimeout(function () {
            $('#phone').removeClass('error');
        }, 300);
    };

    // Address
    if (loc.value == "" || loc.value == null) {
        document.getElementById("cityError").innerHTML = "*Enter valid city name";
        document.getElementById("loc").style.border = "1px solid red";
        document.getElementById("marker").style.color = "red";
        $("#loc").addClass("error");
        setTimeout(function () {
            $("#loc").removeClass("error");
        }, 300);
    } else {
        document.getElementById("CityError").innerHTML = "";
        document.getElementById("loc").style.border = "1px solid #009345"
        document.getElementById("marker").style.color = "#009345"
    }
    
    // swal({
    //     title: "Alert",
    //     text: "This Website Is Under Construction!",
    //     icon: 'info',
    // });
};



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