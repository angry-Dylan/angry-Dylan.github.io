/**
 * Created by Dillance on 15/4/9.
 */
define(function(require, exports, module) {
    'use strict';

    var $ = require('zepto');

    var shareBoxTimer;

    $('.gooey-share-box').mouseenter(function(){
        if(shareBoxTimer) clearTimeout(shareBoxTimer);
        $(this).removeClass('end').addClass('activated');
    }).mouseleave(function(){
        var $this = $(this);
        if(shareBoxTimer) clearTimeout(shareBoxTimer);
        shareBoxTimer = setTimeout(function(){
            $this.removeClass('activated').addClass('end');
        },200);
    });
});