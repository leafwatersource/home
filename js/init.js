var items = $('.slider-item');
var prev = $('.prev');
var next = $('.next');
var num = 0;
var timerAuto;
var flag = true;
function init() {
    for (var i = 0; i < items.length; i++) {
        var item = $(items[i]);
        var width = parseInt($(items[i]).css('width'));
        // 设置移动过小方块的宽度这里每组有五个小方块
        item.css({
            'left': i * width + 'px',
        });
        var itemChildren = item.children();
        for (var j = 0; j < itemChildren.length; j++) {
            //html里面的所有的.img
            var itemChild = $(itemChildren[j]);
            itemChild.css({
                'backgroundPositionX': -i * width + 'px'
            });
        }
    }
    bindEvent();
}
function bindEvent() {
    prev.on('click', function () {
        if (flag) {
            change(-1);
        }
    });
    next.on('click', function () {
        if (flag) {
            change(1);
        }
    });
}
function change(type) {
    if (type === -1) {
        var rotate = ++num * 90;
        console.log(rotate);
        console.log(num);
    } else if (type === 1) {
        var rotate = --num * 90;
        console.log(num);
    }
    var item = 0;
    var len = items.length;//小方块的数量
    var timer = setInterval(function () {
        flag = false;
        if(rotate<-180 ||　rotate>180){
            rotate=0;
            num=0;
        }
        if(rotate===90){
            rotate=-90;
        }
        $(items[item]).css({
            'transform': "rotateX(" + rotate + "deg)"
        });
        item++;
        if (item >= len) {
            clearInterval(timer);
            $(items[len - 1]).on('transitionend', function () {
                flag = true;
            })
        }
    }, 100);
}

init();
