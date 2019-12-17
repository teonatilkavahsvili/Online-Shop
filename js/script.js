// toggle menu

$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav.main-navigation").toggleClass("expanded");
    });






/*------------------------------------    
    06. Search Bar
--------------------------------------*/ 
    
    $( '.search__open' ).on( 'click', function () {
        $( 'body' ).toggleClass( 'search__box__show__hide' );
        return false;
    });

    $( '.search__close__btn .search__close__btn_icon' ).on( 'click', function () {
        $( 'body' ).toggleClass( 'search__box__show__hide' );
        return false;
    });



    $(document).ready(function () {
    $('.colection .boy:lt(3)').show();
    $('.less').hide();
    var items =  18;
    var shown =  6;
    $('.more').click(function () {
        $('.less').show();
        shown = $('.colection .boy:visible').length+3;
        if(shown< items) {
          $('.colection .boy:lt('+shown+')').show(300);
        } else {
          $('.colection .boy:lt('+items+')').show(300);
          $('.more').hide();
        }
    });
    $('.less').click(function () {
        $('.colection .boy').not(':lt(3)').hide(300);
        $('.more').show();
        $('.less').hide();
    });
});






});


// Scrolling Effect

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('.main-navigation').addClass('black');
    }

    else {
        $('.main-navigation').removeClass('black');
    }
})


// slider position - responsive

function myFunction(responsive) {
    if (responsive.matches) { // If media query matches
        $('.main-slider').css('top', $('.main-navigation').height());
        $('.main-slider').css('marginBottom', "90px");
    } else {
        $('.main-slider').css('top', 0);
        $('.main-slider').css('marginBottom', 0);
    }
}

var responsive = window.matchMedia("(max-width: 992px)")
myFunction(responsive) // Call listener function at run time
responsive.addListener(myFunction) // Attach listener function on state changes


//Add active class to the current menu item
var header = document.getElementById("main_menu");
var menuItems = document.getElementsByClassName("main_menu-item--link");
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("main_menu-item--active");
        current[0].className = current[0].className.replace(" main_menu-item--active", "");
        this.className += " main_menu-item--active";
    });
}
