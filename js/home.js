let home = {
    init() {
        this.showdiv = $('.showDiv').find('.row').find('.showDivContent');
        this.flag = true;
        this.showdivText = ["按客户需求定制解决方案", "提高准时交货率", "降低库存水平", "降低生产成本"];
        this.showdivActiveText = ["适应多行业生产排程需求；根据客户需求和投资预算设计解决方案。", "按照设备产能和物料自动排程,产生准确的交货和生产计划；准确评估产能和交期。", "准确的长期生产计划，降低库存水平减少欠料；按库存约束排程减少紧急切换。", "多种自动优化方式，提高设备利用率，降低生产成本"];
        this.bindEvent();
       $('.wrapper').top('item-one');
    },
    bindEvent() {
        $('.goToTop').on('click', function () {
            $('html , body').animate({scrollTop: 0}, 'slow');
        });
        this.showdiv.each((index, ele) => {
            const self = this;
            $(ele).on('mouseenter',function () {
                if(self.flag){
                    self.flag = false;
                    $('.showDivActive').removeClass('showDivActive');
                        $(this).addClass('showDivActive').find('p').css({transform:'rotateY(180deg)'}).text(self.showdivActiveText[index]).end().append('<button class="btn btn-primary">详情点击</button>');
                    $(this).parent().on('mouseleave', ()=> {

                            $(this).removeClass('showDivActive').find('p').text(self.showdivText[index]).css({transform:'rotateY(0deg)'}).end().find('.btn').remove().end().find('button').remove();


                        self.flag = true;
                    })
                }


            })
            // $(ele).hover(function () {
            //         $(this).addClass('showDivActive').find('p').css({transform:'rotateY(180deg)'}).text(self.showdivActiveText[index]).end().append('<button class="btn btn-primary">详情点击</button>');
            // }, function () {
            //    $(this).removeClass('showDivActive').find('p').text(self.showdivText[index]).css({transform:'rotateY(0deg)'}).end().find('.btn').remove().end().find('button').remove();
            // })
        });
    },
};
home.init();
