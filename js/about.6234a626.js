function throttle(a, b) {
    var c, d=0;
    return function() {
    var e=(new Date).getTime(), f=e-d;
    return f>=b&&(c=a.apply(this, arguments), d=e), c;
}
}function updateVideoSize() {
    var a=$container.width(), b=$container.height(), c=16/9, d=a/b;
    c>d?(player.width(b*c).height(b), $video.css("top", 0).css("left", -(b*c-a)/2).css("height", b), $("#video_html5_api").css("width", b*c), $("#video_flash_api").css("width", b*c).css("height", b)): (player.width(a).height(a/c), $video.css("top", -(a/c-b)/2).css("left", 0).css("height", a/c), $("#video_html5_api").css("width", "100%"), $("#video_flash_api").css("width", a).css("height", a/c));
}
function updateFooterSize() {
    $footer.height(window.innerHeight);
}
function updateWheel() {
    var a=Math.min($brand.width(), $brand.height());
    $wheel.css( {
    "background-size": a;
}
);
}function refresh() {
    updateFooterSize(), updateVideoSize(), updateWheel(), $doc.width()>=980?skrollr.init( {
    smoothScrolling: !1, forceHeight:!1, render:function(a) {
    a.curTop>570?player.hide(): player.show();
}
}):skrollr.get()&&skrollr.get().destroy();
}var $window=$(window), $body=$(document.body), $doc=$(document), skrollr=window.skrollr, isTouch="ontouchstart"in window||navigator.msMaxTouchPoints>0, $container=$(".page-header"), $video=$("#video-about-us"), $brand=$(".page-brand"), $footer=$(".page-talksoon"), $wheel=$(".big-logo"), $popup=$(), $layover=$(), player, openVideo, closeVideo;
    if(closeVideo=function() {
    $body.css("overflow", ""), $doc.off("click", closeVideo), $popup.removeClass("fadeout"), $layover.removeClass("fadeout"), setTimeout(function() {
    $popup.remove(), $layover.remove();
}
, 1e3);
}, openVideo=function(a) {
    return isTouch?void window.open("http: //www.youtube.com/embed/"+a, "_blank"):($body.css("overflow", "hidden"), $popup.remove(), $layover.remove(), $popup=$('<div class="popup fadeout">').append('<iframe width="640" height="480" src="//www.youtube.com/embed/'+a+'?rel=0&autoplay=1&controls=0&showinfo=0" frameborder="0" allowfullscreen></iframe>').appendTo(document.body), $layover=$('<div class="layover fadeout">').appendTo(document.body), void setTimeout(function() {
    $popup.removeClass("fadeout"), $layover.removeClass("fadeout"), $doc.on("click", closeVideo);
}
, 20));
}, $(".video-mamade").on("click", function() {
    openVideo("1QMsu7KRQ8w");
}
), $(".brand-video").on("click", function() {
    openVideo("DrgyANiVr3k");
}
), isTouch)updateWheel();
    else {
    $body.removeClass("no-video"), player=window.videojs($video[0].id,  {
    controls: !0, autoplay:!0, preload:"auto", loop:!0, techOrder:["html5", "flash"];
}
);
    var hidden, visibilityChange;
    "undefined"!=typeof document.hidden?(hidden="hidden", visibilityChange="visibilitychange"): "undefined"!=typeof document.mozHidden?(hidden="mozHidden", visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(hidden="msHidden", visibilityChange="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(hidden="webkitHidden", visibilityChange="webkitvisibilitychange");
    var handleVisibilityChange=function() {
    document[hidden]?player.pause(): player.play();
}
;
    document.addEventListener(visibilityChange, handleVisibilityChange, !1), $window.on("resize", throttle(refresh, 100)), refresh();
}