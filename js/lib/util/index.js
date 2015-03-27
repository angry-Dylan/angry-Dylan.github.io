/**
 * Created by Dillance on 15/1/16.
 */
define(function(require, exports, module) {
    'use strict';

    /**
     * 实用工具函数
     * @module util
     */

    // 记录已经生成的id
    var uniqueStrs = {};
    function uniqueRandomStr(length) {
        var result;
        do {
            result = '';
            while (result.length < length) {
                result += Math.random().toString(36).substr(2);
            }
            result = result.substr(0, length);
        } while ( uniqueStrs.hasOwnProperty(result) );

        uniqueStrs[result] = true;

        return result;
    }

    function extend(target) {
        if (target == null) { throw new Error('target cannot be null'); }

        var i = 0, len = arguments.length, p, src;
        while (++i < len) {
            src = arguments[i];
            if (src != null) {
                for (p in src) { target[p] = src[p]; }
            }
        }

        return target;
    }

    module.exports = {
        isFunction: function(value) { return toString.call(value) === '[object Function]'; },
        /**
         * 检查变量是否Date类型
         * @method isDate
         * @param {Any} value 待测变量
         * @return {Boolean} 待测变量是否Date类型
         */
        isDate: function(value) { return toString.call(value) === '[object Date]'; },
        /**
         * 检查变量是否Object类型
         * @method isObject
         * @param {Any} value 待测变量
         * @return {Boolean} 待测变量是否Object类型
         */
        isObject: function(value) { return toString.call(value) === '[object Object]'; },
        /**
         * 检查变量是否为undefined
         * @method isUndefined
         * @param {Any} value 待测变量
         * @return {Boolean} 待测变量是否为undefined
         */
        isUndefined: function(value) { return value === undefined; },
        /**
         * 把源对象的属性扩展到目标对象
         * @method extend
         * @param {Any} target 目标对象
         * @param {Any*} [source] 源对象。若有同名属性，则后者覆盖前者
         * @return {Any} 目标对象
         */
        extend: extend,
        /**
         * 生成不重复的随机字符串
         * @method uniqueRndStr
         * @param {Number} length 字符串长度
         * @return {String} 生成的字符串
         */
        uniqueRandomStr: uniqueRandomStr
    }
});