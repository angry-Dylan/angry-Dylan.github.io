/**
 * Created by Dillance on 15/3/27.
 */
define(function(require, exports, module) {
    'use strict';

    var $ = require('zepto'),
        qs = require('querystring'),
        Qrcode = require('qrcode');

    var cat = qs.parse().cat;
    if(cat){
        $('.post-list li').not('[data-cat=' + cat + ']').addClass('hide');
    }

    var wechatQrcode = new Qrcode(document.querySelector('.wechat-qrcode'),location.href);


});