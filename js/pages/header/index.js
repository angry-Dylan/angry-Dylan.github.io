/**
 * Created by Dillance on 15/3/27.
 */
define(function(require, exports, module) {
    'use strict';

    var $ = require('zepto'),
        qs = require('querystring');

    var $header = $('.site-header'),
        isIndex = location.pathname == '/',
        currentCat = $header.find('.current-cat').val() || qs.parse().cat;

    if(!currentCat) $header.find('.category-list li:eq(0)').addClass('activated');

    $header.find('.category-list a').each(function(){
        var $this = $(this);
        if(currentCat && $this.data('cat') == currentCat) $this.parent('li').addClass('activated');

        $this.click(function(){
            var c = $this.data('cat');
            //$header.find('.category-list .activated').removeClass('activated');
            //$this.parent('li').addClass('activated');
            //if(isIndex && c) history.pushState('cat=' + c,'cat=' + c,'?cat=' + c);
            //else location.href = c ? '/?cat=' + c : '/';
            location.href = c ? '/?cat=' + c : '/';
        });
    });


    //$header.find('.category-list a').click(function(){
    //    var $this = $(this),
    //        c = $this.data('cat');
    //    $header.find('.category-list .activated').removeClass('activated');
    //    $this.parent('li').addClass('activated');
    //    if(location.href == location.origin + '/') history.pushState('cat-' + c,'','/cat-' + c);
    //    else location.href = '/cat-' + c;
    //});
});