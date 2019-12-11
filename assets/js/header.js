$(document).ready(function() {
    var url = window.location.pathname;
    url = url.replace("\/",'')
    url = url.replace(".html",'')
    if(url=="")url="home"
    $("#" + url).addClass("selected")
});

