function sticky_relocate() {
    $(window).scrollTop() > $("#sticky-anchor").offset().top ? ($("header").addClass("stick"), $("#sticky-anchor").height($("header").outerHeight())) : ($("header").removeClass("stick"), $("#sticky-anchor").height(0));
}
$(function () {
    $(window).scroll(sticky_relocate), sticky_relocate();
}),


$(document).ready(function () {
$(".closeNav").click(function () {
$("body").removeClass("js-hiraku-offcanvas-body-left"), $(".js-hiraku-offcanvas").removeClass("js-hiraku-offcanvas-open"), $("body, html").attr("style", "");
});

        (wow = new WOW({
            animateClass: "animated",
            offset: 100,
            callback: function (a) {
                console.log("WOW: animating <" + a.tagName.toLowerCase() + ">");
            },
        })),
            wow.init(),
            AOS.init({ easing: "ease-out-back", duration: 1e3 });
    });


