(function ($) {
    $.fn.extend({
        childNav(option){
            /**
             *
             * option:传入参数
             */
            let liStr = '';
            option.NavList.forEach(function (ele,index) {
                liStr+='<li><a href="'+option.linkList[index]+'">'+ele+'</a></li>'
            });
            $(this).prepend(' <div class="row article-title">\n' +
                '        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 articleTitleLeft">\n' +
                '            <h4>'+option.title+'</h4>\n' +
                '        </div>\n' +
                '        <div class="col-lg-6 col-md-6 articleTitleRight">\n' +
                '            <ul class="aritcleNav">\n' +
                '               '+ liStr+
                '            </ul>\n' +
                '        </div>\n' +
                '    </div>');
            return this;
        }
    })
})(jQuery);