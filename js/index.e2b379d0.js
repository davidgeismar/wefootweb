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
function refresh() {
    updateVideoSize(), $doc.width()>=980?($phoneOrganize.prop("src", $phoneOrganize.data("large-src")), skrollr.init( {
    smoothScrolling: !1, forceHeight:!1, render:function(a) {
    a.curTop>570?player.hide(): player.show();
}
})):skrollr.get()&&($phoneOrganize.prop("src", $phoneOrganize.data("small-src")), skrollr.get().destroy());
}function loadImagesForDesktop() {
    if($doc.width()>=DESKTOP_WIDTH_THRESHOLD) {
    var a;
    $("img").each(function(b, c) {
    a=c.getAttribute("data-src"), a&&(c.src=a);
}
), $window.off("resize", loadImagesForDesktop);
}}var isTouch="ontouchstart"in window||navigator.msMaxTouchPoints>0, skrollr=window.skrollr, $window=$(window), $body=$(document.body), $doc=$(document), $container=$(".page-header"), $video=$("#video-header"), $phoneOrganize=$(".page-organize .phone"), $popup=$(), $layover=$(), player, openVideo, closeVideo, DESKTOP_WIDTH_THRESHOLD=960;
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
}, $(".fos-video").on("click", function() {
    openVideo("");
}
), !true) {
    $body.removeClass("no-video"), player=window.videojs($video[0].id,  {
    controls: !1, autoplay:!0, preload:"auto", loop:!0, techOrder:["html5", "flash"]
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
setTimeout(function() {
    $body.addClass("animate-ready");
}
, 1e3), $(".download-button").click(function() {
    var a=navigator.userAgent;
    a.indexOf("iPhone")>-1||a.indexOf("iPod")>-1||a.indexOf("iPad")>-1?window.open(""):/Android/.test(a)&&window.open("");
}
)