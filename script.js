$(document).ready(function () {
    $(".top-menu-icon-wrapper").click(function () {
        $(".top-nav-list").toggleClass("active");
    });

    var slideIndex = 1;
    showSlides(slideIndex);

    function setSlideHeight() {
        var slideHeight = Math.floor(document.body.clientWidth * 700 / 1280);
        $(".slides-container").height(slideHeight);
    }

    setSlideHeight();

    $(window).resize(function () {
        setSlideHeight();
    });

    setInterval(function () {
        showSlides(slideIndex += 1);
    }, 5000);

    $(".slideshow-container").on("click", function (e) {
        var target = $(e.target);

        if (target.hasClass("slide-prev")) {
            showSlides(slideIndex += -1);
        } else if (target.hasClass("slide-next")) {
            showSlides(slideIndex += 1);
        } else if (target.hasClass("slide-indicator")) {
            slideIndex = Number(target.attr("data-slide-to"));
            showSlides(slideIndex);
        }
    });

    function showSlides(n) {
        var slides = $(".slide");
        var slideBtn = $(".slide-indicator");

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.removeClass("active");
        slideBtn.removeClass("active");

        slides.eq(slideIndex - 1).addClass("active");
        slideBtn.eq(slideIndex - 1).addClass("active");
    }

    $('.tab-links a').on('click', function (e) {
        var currentAttrValue = $(this).attr('href');

        // Show/Hide Tabs
        $('.tab-wrapper ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

    $(".interior-header, .exterior-header, .safety-header, .other-header, .warr-header").click(function () {
        var specTarget = this.className.replace("-header", "");
        $(".spec-" + specTarget).fadeToggle();
        $(this).children("div.minus-button").toggleClass("plus-button");
    });
});