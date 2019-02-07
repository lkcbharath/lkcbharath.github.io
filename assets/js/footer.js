jQuery(document).ready(function() {
    var contentHeight = jQuery(window).height();
    var footerHeight = jQuery('.footer').height();
    var footerTop = jQuery('.footer').position().top + footerHeight;
    if (footerTop < contentHeight) {
        jQuery('.footer').css('margin-top', 10+ (contentHeight - footerTop) + 'px');
      }
    });