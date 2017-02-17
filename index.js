$(document).ready(function(){
// This function add smooth scrolling behaviour to my navigation bar.
    $("#myNavbar a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    //set the active class on the right li:
    $("li.nav-item").on('click', function(){
        var clickedLi = $(this);
        var otherLis = $("li.nav-item");
        otherLis.removeClass("active");
        clickedLi.addClass("active");
    });

    //set the active class on home when clicking on "My Portfolio":
    $("#myNavbar a.navbar-brand").on('click', function(){
       var homeLi = $("li.nav-item:first");
        var otherLis = $("li.nav-item");
        otherLis.removeClass("active");
        homeLi.addClass("active");

    });
});