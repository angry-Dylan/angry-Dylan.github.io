---
layout: post
title: "论愉快开发web手机端的可能性"
data: 2015-05-25 23:45:00
categories: web
---

作为移动互联网最便捷的入口，手机端web页面需求不断上升，特别是以微信为载体的，各种高端大气上档次低调奢华有内涵奔放洋气有深度简约时尚国际范冷艳高贵接地气时尚亮丽小清新狂拽帅气吊炸天。那么问题来了，开发手机端的页面跟开发PC端页面有啥子区别呢？

<!-- break -->

众所周知，IE是web前端开发人员的终极噩梦，就像妇联里的奥创，当你接触手机端开发后，才发现后面还有一个灭霸。各种国产安卓手机让你瞬间变果粉。幸好随着时代的发展，现在已经不需要兼容安卓4.2以下的手机了。

估计刚开始做手机端开发的都会遇到同一个问题，就是屏幕大小的适应。手机的屏幕尺寸非常多样。查询各种手机尺寸可以进入此网站 http://mydevice.io/devices/ 。经过深入调查，本人总结出三种解决方案。

**1.使用viewport的缩放功能对页面进行缩放**

{% highlight javascript %}
//ios直接自动缩放 
<meta name="viewport" content=“width=640,user-scalable=no"> 
//安卓需要计算缩放⽐比 
initial-scale=缩放⽐,minimum-scale=缩放⽐,maximum-scale=缩放⽐
{% endhighlight %}

**2.使⽤rem代替px作为单位,计算缩放⽐比设置html的font-size**

{% highlight javascript %}
<script>
        window.onresize = function(){
            document.documentElement.style.fontSize = ((document.documentElement.clientWidth / 640) * 16) + 'px';
        };
        document.documentElement.style.fontSize = ((document.documentElement.clientWidth / 640) * 16) + 'px';
    </script>
<style>
body{width:30rem;margin:0 auto;}
</style>
{% endhighlight %}

**3.高度写死,宽度使⽤百分⽐**

{% highlight javascript %}
//可参考淘宝m站
{% endhighlight %}

解决了自适应问题后一切都变得简单了，css3，es5随意使用，思维从来没有这么流畅过，一小时一千行代码，打开浏览器看效果，零bug！完美！发个朋友圈炫耀一下，再买瓶可乐奖励一下自己。

幻想结束，回到现实，手机端还存在着各种问题。本来以为可以开始愉快地写代码了，才发现手机端最常用的一个触摸事件，竟然没有提供原生方法，只给了`touchstart` `touchend` `touchmove` 怎么办？要么直接用click，要么找个库。click太慢了，不行，经过反复研究，最后决定使用**zepto**，基本上跟jQuery写法一致省去了学习成本，提供了各种常用的触摸事件还挺轻量的。不过用了一段时间之后，发现有一个比较严重的bug，就是tap事件会穿透，如果你绑了个tap事件是移开或者移除一个元素，那么就会触发原本处在这个元素底层的另一个元素的click事件，真奇葩。看了看github，原来这bug三年前就被发现了，现在还没被解决，尼玛！目前解决方法有**fastclick**，**延迟触发**，具体可以百度一下。

越往下做就越发现其实手机端有许多的兼容问题，例如video标签，每个浏览器表现都不一样，例如UC浏览器下video标签永远处在最顶层；官方提供的api各个浏览器支持也不太好；如果弄HLS就更烦了。除了这些，还有很多css兼容问题，基本上高级一点的css3最好还是不要用。

折腾一番后，终于写完代码，想看看效果，发现有bug，可是又不能像chrome那样直接查看元素，怎么办呢？目前手机端有以下几种调试方法：

>1.alert

>2.chrome模拟手机

>3.UC开发者版(安卓)

>4.MIHTOOL(IOS)

抓包的话可以用**fiddler**，配合这些工具，基本上就能解决手机上调试网页的问题了，当然效率方面还是比不上PC端。

虽然手机端开发可以使用css3和es5标准，大大减少了代码量，可是存在的兼容性问题也不比PC的少，调试代码也比PC端麻烦。所以本人总结：在做一些比较简单的需求的时候，例如一些活动页面，你完全可以保持愉快的心情；可是如果遇到比较复杂的页面结构和交互时，你就很可能会拿起刀去捅产品经理了。


