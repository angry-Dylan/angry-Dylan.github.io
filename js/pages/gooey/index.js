/**
 * Created by Dillance on 15/4/9.
 */
define(function(require, exports, module) {
    'use strict';

    var $ = require('zepto');

    var $gooeyShareBox = $('.gooey-share-box'),
        $wechatQrcode = $('.wechat-qrcode');
    var shareBoxTimer;

    $gooeyShareBox.mouseenter(function(){
        if(shareBoxTimer) clearTimeout(shareBoxTimer);
        $(this).removeClass('end').addClass('activated');
    }).mouseleave(function(){
        var $this = $(this);
        if(shareBoxTimer) clearTimeout(shareBoxTimer);
        shareBoxTimer = setTimeout(function(){
            $this.removeClass('activated').addClass('end');
            $wechatQrcode.removeClass('activated');
        },200);
    });

    $gooeyShareBox.find('.wechat').click(function(){
        $wechatQrcode.addClass('activated');
    });

    $gooeyShareBox.find('.sina').click(function(){
        window.open('http://service.weibo.com/share/share.php?url=' + location.href + '&title=' + encodeURIComponent('Dylan\'s awesome blog') + '&img=/images/dylan.svg');
    });
});