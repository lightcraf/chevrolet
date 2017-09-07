
jQuery(document).ready(function () {
    jQuery('.tab-links a').on('click', function (e) {
        var currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        jQuery('.tab-wrapper ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

    // Show/Hide Spec
    $(".interior-header").click(function () {
        $(".spec-interior").fadeToggle();
        $("#hide-1 div:nth-child(2)").toggleClass("plus");
    });

    $(".exterior-header").click(function () {
        $(".spec-exterior").fadeToggle();
        $("#hide-2 div:nth-child(2)").toggleClass("plus");
    });

    $(".safety-header").click(function () {
        $(".spec-safety").fadeToggle();
        $("#hide-3 div:nth-child(2)").toggleClass("plus");
    });

    $(".other-header").click(function () {
        $(".spec-other").fadeToggle();
        $("#hide-4 div:nth-child(2)").toggleClass("plus");
    });

    $(".warr-header").click(function () {
        $(".spec-warr").fadeToggle();
        $("#hide-5 div:nth-child(2)").toggleClass("plus");
    });

    // Show/Hide Menu
    //$(".menu").click(function () {
    //    $(".top-nav").toggleClass("responsive");
    //});

    $(".top-menu-icon-wrapper").click(function () {
        $(".top-nav-list").toggleClass("top-nav-list-responsive");
    });

});
