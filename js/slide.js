var nowIndex = 0,  //当前展示的图片的索引
    clientW = $(window).outerWidth(),
    w = $('.wrapper').width(),   //单张图片的宽度
    len = $('.item').length,     //展示的图片的张数
    slider_timer = undefined,    //定时器
    flag = true,   //加锁，防止疯狂点击
    timer = null;

//初始化方法
function init() {
    $('.img-box').css({width: clientW * (len + 1)}).find('li').find('a').find('img').css({width: clientW});
    bindEvent();
    slide_auto();
}

init();
window.onresize = function () {
    clientW = $(window).outerWidth();
    $('.img-box').css({width: clientW * (len + 1)}).find('li').find('a').find('img').css({width: clientW});
};

//绑定点击事件和鼠标事件
function bindEvent() {
    $('.prevBtn').add($('.nextBtn')).add($('.item')).on('click', function () {
        if ($(this).attr('class') === 'prevBtn') {
            move('prev');
        } else if ($(this).attr('class') === 'nextBtn') {
            move('next');
        } else {
            var index = $(this).index();
            move(index);
        }
        changeOrderStyle(nowIndex);
    });

    $('.slider').mouseenter(function () {
        $('.btnClick').css({display: 'block'});
        clearTimeout(slider_timer);
        clearInterval(timer);

    }).mouseleave(function () {
        $('.btnClick').css({display: 'none'});
        clearTimeout(slider_timer);
        clearInterval(timer);
        $('.timer').css({width: 0});
        slide_auto();
    });

    $('.btnClick a').mouseenter(function () {
        clearTimeout(slider_timer);
        clearInterval(timer);
        slide_auto();

    }).mouseleave(function () {
        clearTimeout(slider_timer);
        clearInterval(timer);
    })

}


//移动当前展示图片的方法
function move(direction) {
    if (flag) {
        flag = false;
        var showAnimate = true;
        if (direction === 'prev' || direction === 'next') {
            if (direction === 'prev') {
                if (nowIndex === 0) {  //如果当前是第一张图片，则先变化到最后一张图片，再动画向左移动一张
                    $('.img-box').css({left: -(clientW * len)});
                    nowIndex = len - 1;
                } else {
                    nowIndex = nowIndex - 1;
                }
            } else {
                if (nowIndex === len - 1) {  //如果当前是倒数第二张图片，则先动画向右移动一张，再变化到第一张图片
                    showAnimate = false;
                    $('.img-box').animate({left: -(clientW * len)}, function () {
                        $(this).css({left: 0});
                        clearTimeout(slider_timer);
                        clearInterval(timer);
                        slide_auto();
                        flag = true;
                    });
                    nowIndex = 0;
                } else {
                    nowIndex = nowIndex + 1;
                }
            }
        } else {
            nowIndex = direction;
        }
        if (showAnimate) {
            $('.img-box').animate({left: -(clientW * nowIndex)}, function () {
                clearTimeout(slider_timer);
                clearInterval(timer);
                slide_auto();
                flag = true;
            })
        }
    }
}
//每次变化，改变小圆点的样式
function changeOrderStyle(index) {
    $('.active').removeClass('active');
    $('.item').eq(index).addClass('active');
}
//设置自动轮播的动画
function slide_auto() {
    slider_timer = setTimeout(function () {
        move('next');
        changeOrderStyle(nowIndex);
    }, 8000);
    timer = setInterval(function () {
        let timerW = clientW / 8;
        let timewidth = $('.timer').css('width');

        if (parseInt(timewidth) > clientW - 5) {
            $('.timer').animate({width: '100%'}, function () {
                $(this).css({width: 0});
            });
        } else {
            $('.timer').animate({width: parseInt(timewidth) + timerW});
        }

    }, 850);

}


