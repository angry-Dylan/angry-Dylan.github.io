---
layout: post
title: "坑 of animation-play-state"
data: 2015-03-23 16-45-00
categories: web前端
---
最近做移动端开发，经常都需要用到animation做一些动效，特别是那些高速回旋加速无限循环拉风装逼大气奢华360度喷气加速回旋动画，根本无法单靠transition来实现。

<!-- break -->

马上打开百度，输入'animation css3'(当然不能被人发现)。好了，看一下W3C就回想起这css属性怎样写了。

{% highlight css %}
.ass{-webkit-animation:move-your-ass .5s infinite;}
@-webkit-keyframes move-your-ass {
    0%{-webkit-transform:translateY(0);opacity: 0;}
    60%{-webkit-transform:translateY(-10px);opacity:1}
    100%{-webkit-transform:translateY(-20px);opacity:0}
}
{% endhighlight %}

嗯，多简单，一个无限循环抽搐屁股，可是就这么就完了麽？还是加点人机杂交效果吧，用手指抚摸屁股的时候才动，挪开就停止。于是代码大概是这样写的：

{% highlight %}
.ass.activated{-webkit-animation:move-your-ass .5s infinite;}
@-webkit-keyframes move-your-ass {
    0%{-webkit-transform:translateY(0);opacity: 0;}
    60%{-webkit-transform:translateY(-10px);opacity:1}
    100%{-webkit-transform:translateY(-20px);opacity:0}
}

document.querySelector('.ass').addEventListener('touchstart',function(){
    this.setAttribute('class','activated');
});
document.querySelector('.ass').addEventListener('touchend',function(){
    this.removeAttribute('class');
});
{% endhighlight %}

搞定，可是总有种别扭的感觉，嗯，