// $('.wrapper').prepend(' <nav class="navbar navbar-expand-lg navbar-light bg-light">\n' +
//         '        <a class="navbar-brand" href="#">\n' +
//         '            <img src="img/logo.png" alt="">\n' +
//         '        </a>\n' +
//         '        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"\n' +
//         '                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n' +
//         '            <span class="navbar-toggler-icon"></span>\n' +
//         '        </button>\n' +
//         '        <div class="collapse navbar-collapse" id="navbarSupportedContent">\n' +
//         '            <ul class="navbar-nav mr-auto nav-bar">\n' +
//         '                <li class="nav-item item-one active">\n' +
//         '                    <a class="nav-link" href="#">首页<span class="sr-only">(current)</span></a>\n' +
//         '                </li>\n' +
//         '                <li class="nav-item item-two">\n' +
//         '                    <a class="nav-link" href="#">技术文章</a>\n' +
//         '                </li>\n' +
//         '                <li class="nav-item dropdown item-three">\n' +
//         '                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button"\n' +
//         '                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
//         '                        产品介绍\n' +
//         '                    </a>\n' +
//         '                    <div class="dropdown-menu" aria-labelledby="navbarDropdown1">\n' +
//         '                        <a class="dropdown-item item-three-first" href="#">产品概述</a>\n' +
//         '                        <a class="dropdown-item item-three-second" href="#">功能介绍</a>\n' +
//         '                        <a class="dropdown-item item-three-third" href="#">可带来的收益</a>\n' +
//         '                        <a class="dropdown-item item-three-fourth" href="#">可解决的问题</a>\n' +
//         '                    </div>\n' +
//         '                </li>\n' +
//         '                <li class="nav-item dropdown item-four">\n' +
//         '                    <a class="nav-link dropdown-toggle item-four-first" href="#" id="navbarDropdown" role="button"\n' +
//         '                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
//         '                        解决方案\n' +
//         '                    </a>\n' +
//         '                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">\n' +
//         '                        <a class="dropdown-item item-four-second" href="#">注塑成型企业生产排程解决方案</a>\n' +
//         '                        <a class="dropdown-item item-four-third" href="#">模具制造企业生产排程需求及解决方案</a>\n' +
//         '                        <a class="dropdown-item item-four-fourth" href="#"> PCBA/SMT行业生产排程难点与解决方案</a>\n' +
//         '                        <a class="dropdown-item item-four-fifth" href="#">适合中小企业的半自动排程PLANMATECAS</a>\n' +
//         '                    </div>\n' +
//         '                </li>\n' +
//         '                <li class="nav-item item-five">\n' +
//         '                    <a class="nav-link" href="#">产品演示视频</a>\n' +
//         '                </li>\n' +
//         '                <li class="nav-item item-six">\n' +
//         '                    <a class="nav-link" href="#">客户案例</a>\n' +
//         '                </li>\n' +
//         '                <li class="nav-item item-seven">\n' +
//         '                    <a class="nav-link" href="#">资料下载</a>\n' +
//         '                </li>\n' +
//         '                <li class="nav-item item-eight">\n' +
//         '                    <a class="nav-link" href="#">关于我们</a>\n' +
//         '                </li>\n' +
//         '            </ul>\n' +
//         '        </div>\n' +
//         '    </nav>');
(function ($) {
    $.fn.extend({
        top(option){
            $(this).prepend(' <nav class="navbar navbar-expand-lg navbar-light bg-light">\n' +
        '        <a class="navbar-brand" href="#">\n' +
        '            <img src="img/logo.png" alt="">\n' +
        '        </a>\n' +
        '        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"\n' +
        '                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n' +
        '            <span class="navbar-toggler-icon"></span>\n' +
        '        </button>\n' +
        '        <div class="collapse navbar-collapse" id="navbarSupportedContent">\n' +
        '            <ul class="navbar-nav mr-auto nav-bar">\n' +
        '                <li class="nav-item item-one active">\n' +
        '                    <a class="nav-link" href="#">首页<span class="sr-only">(current)</span></a>\n' +
        '                </li>\n' +
        '                <li class="nav-item item-two">\n' +
        '                    <a class="nav-link" href="#">技术文章</a>\n' +
        '                </li>\n' +
        '                <li class="nav-item dropdown item-three">\n' +
        '                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button"\n' +
        '                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '                        产品介绍\n' +
        '                    </a>\n' +
        '                    <div class="dropdown-menu" aria-labelledby="navbarDropdown1">\n' +
        '                        <a class="dropdown-item item-three-first" href="#">产品概述</a>\n' +
        '                        <a class="dropdown-item item-three-second" href="#">功能介绍</a>\n' +
        '                        <a class="dropdown-item item-three-third" href="#">可带来的收益</a>\n' +
        '                        <a class="dropdown-item item-three-fourth" href="#">可解决的问题</a>\n' +
        '                    </div>\n' +
        '                </li>\n' +
        '                <li class="nav-item dropdown item-four">\n' +
        '                    <a class="nav-link dropdown-toggle item-four-first" href="#" id="navbarDropdown" role="button"\n' +
        '                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '                        解决方案\n' +
        '                    </a>\n' +
        '                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">\n' +
        '                        <a class="dropdown-item item-four-second" href="#">注塑成型企业生产排程解决方案</a>\n' +
        '                        <a class="dropdown-item item-four-third" href="#">模具制造企业生产排程需求及解决方案</a>\n' +
        '                        <a class="dropdown-item item-four-fourth" href="#"> PCBA/SMT行业生产排程难点与解决方案</a>\n' +
        '                        <a class="dropdown-item item-four-fifth" href="#">适合中小企业的半自动排程PLANMATECAS</a>\n' +
        '                    </div>\n' +
        '                </li>\n' +
        '                <li class="nav-item item-five">\n' +
        '                    <a class="nav-link" href="#">产品演示视频</a>\n' +
        '                </li>\n' +
        '                <li class="nav-item item-six">\n' +
        '                    <a class="nav-link" href="#">客户案例</a>\n' +
        '                </li>\n' +
        '                <li class="nav-item item-seven">\n' +
        '                    <a class="nav-link" href="#">资料下载</a>\n' +
        '                </li>\n' +
        '                <li class="nav-item item-eight">\n' +
        '                    <a class="nav-link" href="#">关于我们</a>\n' +
        '                </li>\n' +
        '            </ul>\n' +
        '        </div>\n' +
        '    </nav>');
            $('.nav-bar').find('.active').removeClass('active');
           $('.'+option).addClass('active');
        }
    })
})(jQuery);

