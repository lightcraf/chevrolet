
jQuery(document).ready(function () {
    jQuery('.tabs .tab-links a').on('click', function (e) {
        var currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

    // Show/Hide Spec
    $("#interior-hide").click(function () {
        $(".spec-interior").fadeToggle();
        $("#hide-1 div:nth-child(2)").toggleClass("plus");
    });

    $("#exterior-hide").click(function () {
        $(".spec-exterior").fadeToggle();
        $("#hide-2 div:nth-child(2)").toggleClass("plus");
    });

    $("#safety-hide").click(function () {
        $(".spec-safety").fadeToggle();
        $("#hide-3 div:nth-child(2)").toggleClass("plus");
    });

    $("#other-hide").click(function () {
        $(".spec-other").fadeToggle();
        $("#hide-4 div:nth-child(2)").toggleClass("plus");
    });

    $("#warr-hide").click(function () {
        $(".spec-warr").fadeToggle();
        $("#hide-5 div:nth-child(2)").toggleClass("plus");
    });

    // Show/Hide Menu
    $(".menu").click(function () {
        $(".top-nav").toggleClass("responsive");
    });

});
        