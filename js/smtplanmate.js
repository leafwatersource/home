let smtplanmate = {
    init(){
        this.render();
    },
    render(){
        $('.wrapper').childNav({
            title:'PCBA/SMT行业生产排程难点与解决方案',
            NavList:['PCBA/SMT行业生产排程难点与解决方案','解决方案','首页'],
            linkList:['#','./Solution.html','./index.html']
        }).top('item-four','item-four-third');

    }
};
smtplanmate.init();