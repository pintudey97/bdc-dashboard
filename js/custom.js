$(document).ready(function () {
    $(function () {
        $(".tooltipshow").tooltip();
    });
    $(".navtoggle").click(function(){
        $(this).toggleClass('open');
        $(".side-navbar").toggleClass('open');
        $(".nav-right").toggleClass('hide');
        $(".nav-layer").fadeToggle();
        $("body").toggleClass('overflow-hidden');
    });
});