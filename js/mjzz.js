let mjzz = {
    init(){
        this.render();
    },
    render(){
        $('.wrapper').childNav({
            title:'模具制造企业生产排程需求及解决方案',
            NavList:['模具制造企业生产排程需求及解决方案','解决方案','首页'],
            linkList:['#','./Solution.html','./index.html']
        }).top('item-four','item-four-second');

    }
};
mjzz.init();