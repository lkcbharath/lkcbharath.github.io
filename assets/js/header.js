$(document).ready(function() {
    var url = window.location.pathname;
    url = url.replace("\/",'')
    url = url.replace(".html",'')
    $("#" + url).addClass("selected")
});

