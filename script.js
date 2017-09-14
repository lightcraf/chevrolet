jQuery(document).ready(function () {
    jQuery('.tab-links a').on('click', function (e) {
        var currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        jQuery('.tab-wrapper ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

    jQuery(".top-menu-icon-wrapper").click(function () {
        jQuery(".top-nav-list").toggleClass("top-nav-list-responsive");
    });

    jQuery(".interior-header, .exterior-header, .safety-header, .other-header, .warr-header").click(function () {
        var specTarget = this.className.replace("-header", "");
        jQuery(".spec-" + specTarget).fadeToggle();
        jQuery(this).children("div.minus-button").toggleClass("plus-button");
    });
});
