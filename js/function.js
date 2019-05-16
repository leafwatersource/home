let Func = {
    init() {
        this.icon = ['check', 'object-group', 'legal',
            'database', 'suitcase', 'bolt', 'indent',
            'bar-chart-o', 'random', 'sliders', 'exchange',
            'sort-amount-asc', 'truck', 'pencil', 'tablet',
            'tasks', 'newspaper-o', 'building', 'file-excel-o',
            'users'
        ];
        this.title = ['按照工艺模型自动排程', '快速优化', '快速计划变更', '甘特图与任务表操作界面',
            '支持辅助资源约束', '按照优先级自动选择设备', '可定义工序间关系', '简单方便的模型维护工具',
            '方便的人工计划修改工具', '多种工具用于计划的性能分析', '使用在库及在途物料约束排程', '可排长期计划和短期计划',
            '从ERP获取工单库存', '从MES读取实际生产进度', '支持客户定制功能', '支持数据报表统计定制功能', '工单预打包',
            '模具、颜色优化', '支持手机APP报工', '按人力排程'];
        this.content = ['PlanMate APS 按照设定好的模型全自动计算排程结果，无需人工干预。', '1000张工单，每张工单生产工艺5层左右，运行时间3-5分钟。', '设备维护计划、需求变更、来料变更时可快速重排。',
            '甘特图方便总体分析、工序关系，任务表可查看每张工单细节。', '如果排程中有辅助资源（钢网、治具、人力等）的约束，系统会约束该资源的使用。', '支持设备设定优先级，生产任务会优先排程到优先级高的设备上。',
            '工序关系可根据实际需要设定，可设定与后工序为结束-开始或者结束-结束。', 'PlanMate APS 的Modeler模块为模型维护工具，操作方式与Excel一致，方便维护。', 'Gantt模块为排程结果显示和修改工具，用户只需调整甘特图的位置即可调整计划。',
            '工序流程、资源优化、交货延迟、物料分配等数据分析报表让用户对订单状态一目了然。', '支持使用库存约束排程，能准确计算欠料表及物料需求日期和由于欠料对工单造成的交货延迟。', '短期计划用于日常产线排程，长期排程用于订单及物料统计和管理。',
            '可从ERP中获取工单、库存、BOM等信息，无需手动维护APS基础数据。', '可从企业现有的MES系统中获取生产进度，使计划与实际一致，解决计划实际脱轨问题。', '由于APS运算逻辑无法做到任何行业通用，可根据客户的需求对APS进行定制开发。',
            '可根据客户需求，对数据报表进行定制开发，报表开发代码可开源，方便客户后期更改。', '可支持ERP预打包或Plugin模块打包，有打包规则的，系统会将相同打包标识从产品集中排程。', '针对注塑/成型企业，可优化模具、颜色的切换，同模具或者同颜色的优先集中排程。',
            '针对没有MES的企业或根据企业需求，可使用手机APP进行报工。', '在以人力为主要约束条件的工序中，系统自动进行人力分配，满足交货及人力利用的最大化。'];
        this.functionItem = $('.functionItem');
        $('.wrapper').childNav({
            title: '功能介绍',
            NavList: ['功能介绍', '首页'],
            linkList: ['#', './index.html']
        }).top('item-three', 'item-three-second');
        this.render();
    },
    render() {
        let divStr = '';
            this.title.forEach((ele,index)=>{
                divStr += '<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">\n' +
                    '                <div class="functionItemBox">\n' +
                    '                    <div class="functionIconBox">\n' +
                    '                        <i class="fa fa-'+this.icon[index]+'"></i>\n' +
                    '                    </div>\n' +
                    '                    <h4 class="funcitonTitle">'+ele+'</h4>\n' +
                    '                    <p class="funcitonDesc"> '+this.content[index]+'</p>\n' +
                    '                </div>\n' +
                    '            </div>'
            });
        this.functionItem.html(divStr)
    }
};
Func.init();
