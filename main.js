$(function() {
    $(".speedTab15").click();
    function close_pop() {
        if ($(".popboxes_close").length > 0) {
            $(".popboxes_close").click();
        }
    }
    $("#vjs_mediaplayer_html5_api").bind('ended',
    function() {
        setTimeout(function() {
            $('#nextBtn').click();
        },
        4000);
        setTimeout(function() {
            $(".speedTab15").click();
        },
        9000);
    });
    setInterval(close_pop, 10000);
});
