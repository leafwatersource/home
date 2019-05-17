let videos = {
    init(){
        this.render();
    },
    render(){
        $('.wrapper').childNav({
            title:'产品演示视频',
            NavList:['产品演示视频','首页'],
            linkList:['./videos.html','./index.html']
        }).top('item-five')
    }
};
videos.init();