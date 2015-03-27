---
layout: post
title: "坑 of animation-play-state"
data: 2015-03-23 16-45-00
category: web
---
最近做移动端开发，经常都需要用到animation做一些动效，特别是那些高速回旋加速无限循环拉风装逼大气奢华360度喷气加速回旋动画，根本无法单靠transition来实现。

<!-- break -->

马上打开百度，输入'animation css3'(当然不能被人发现用百度而不用google)。好了，看一下W3C就回想起这css属性怎样写了。

{% highlight css %}
.ass{-webkit-animation:move-your-ass .5s infinite;}
@-webkit-keyframes move-your-ass {
    0%{-webkit-transform:translateY(0);opacity: 0;}
    60%{-webkit-transform:translateY(-10px);opacity:1}
    100%{-webkit-transform:translateY(-20px);opacity:0}
}
{% endhighlight %}

嗯，多简单，一个无限循环抽搐屁股，可是就这么就完了麽？还是加点人机杂交效果吧，用手指抚摸屁股的时候才动，挪开就停止。于是代码大概是这样写的：

{% highlight javascript %}
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

搞定，可是总有种不太可靠的感觉，试了一下发现了个问题。手指摸它的时候的确是动了，可是挪开手之后，整个屁股恢复到最开始的状态了，这不是我想要的，
我要的是暂停而不是停止啊。咋整呢？马上再打开百度输入'animation css3'(当然不能被人发现用百度而不用google)，再看了下W3C，发现animation有
一个属性长这个样子 `animation-play-state` 有 `paused` `running` 两个值，貌似能用这货改变动画的状态。让我们来尝一下。

{% highlight javascript %}
.ass{-webkit-animation:move-your-ass .5s infinite paused;}
@-webkit-keyframes move-your-ass {
    0%{-webkit-transform:translateY(0);opacity: 0;}
    60%{-webkit-transform:translateY(-10px);opacity:1}
    100%{-webkit-transform:translateY(-20px);opacity:0}
}
.ass.activated{-webkit-animation-play-state:running}

document.querySelector('.ass').addEventListener('touchstart',function(){
    this.setAttribute('class','activated');
});
document.querySelector('.ass').addEventListener('touchend',function(){
    this.removeAttribute('class');
});
{% endhighlight %}


