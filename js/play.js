let videos = {
    init() {
        this.video = ['1.APS高级生产计划与排程-前言与联系方式.mp4', '2.APS高级生产计划与排程-什么是APS.mp4', '3.APS高级生产计划与排程-PlanMate系统架构.mp4',
            '4.APS高级生产计划与排程-PlanMate模型结构.mp4', '5.高级生产计划与排程-产品工艺模型示例.mp4', '6.注塑行业模型特点.mp4', '7.PCBA行业模型示例.mp4',
            '8.甘特图基础和工作日历.mp4', '9.导入订单运行排程.mp4', '10.任务信息及延迟报警.mp4', '11.工作计划中的分类遍历视图.mp4', '12.生产计划统计报表.mp4',
            '13.任务的手工移动及拆分合并.mp4', '14.APS高级生产计划与排程-实际生产进度及按进度调整计划.mp4', '15.APS高级生产计划与排程-分析视图.mp4', '16.设备异常及紧急插单.mp4', '17.按库存排程及MRP需求.mp4'];
        this.parent();
        this.render();
    },
    parent() {
        this.theRequest = GetRequest();
        /**
         * @return {number}
         */
        function GetRequest() {
            var url = location.search;
            if (url.slice(1, 6) !== 'video' || url === '') {
                theRequest = 1;
                return theRequest;
            } else {
                var theRequest = {};
                if (url.indexOf("?") !== -1) {
                    var str = url.substr(1);
                    theRequest = parseInt(str.slice(6, str.length))
                }
                return theRequest;
            }
        }

    },
    render() {
        let str = '<video class="container" id="myVideo" controls>\n' +
            '        <source src=./video/' + this.video[this.theRequest - 1] + ' type="video/mp4">\n' +
            '        Your browser does not support the video tag.\n' +
            '    </video>';
        $('#video').append($(str));
        $('title').text(this.video[this.theRequest - 1]);
        $('.wrapper').childNav({
            title: this.video[this.theRequest - 1],
            NavList: [this.video[this.theRequest - 1], '产品演示视频', '首页'],
            linkList: ['#', './videos.html', './index.html']
        }).top('item-five')
    }


};
videos.init();