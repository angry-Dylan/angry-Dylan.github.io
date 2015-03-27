/**
 * Created by Dillance on 15/3/27.
 */
define(function(require, exports, module) {
    'use strict';

    var $ = require('zepto'),
        qs = require('querystring');

    var cat = qs.parse().cat;
    if(cat){
        $('.post-list li').not('[data-cat=' + cat + ']').addClass('hide');
    }

});