/**
 * Created by Dillance on 15/4/9.
 */
define(function(require, exports, module) {
    'use strict';

    var $ = require('zepto'),
        qs = require('querystring');

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

    $gooeyShareBox.find('.sina,.qq').click(function(){
        var type = $(this).data('type'),
            url, rurl = encodeURIComponent(location.href),
            title = encodeURIComponent('Dylan\'s awesome blog'),
            content = encodeURIComponent($('title').text()),
            img = '/images/dylan.svg',
            data = {};


        switch (type){
            case 'sina':
                url = 'http://service.weibo.com/share/share.php';
                data = {
                    url: rurl,
                    title: title,
                    desc: content,
                    pic: img
                };
                break;
            case 'qq':
                url = 'http://connect.qq.com/widget/shareqq/index.html';
                data = {
                    url: rurl,
                    title: title,
                    desc: content,
                    summary: content,
                    site: rurl,
                    pic: img
                };
                break;
            default :
                return
        }
        //window.open('http://service.weibo.com/share/share.php?url=' + location.href + '&title=' + encodeURIComponent('Dylan\'s awesome blog') + '&img=/images/dylan.svg');
        window.open(qs.append(url,data));
    });
});