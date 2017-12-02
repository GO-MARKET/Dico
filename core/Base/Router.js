define(function () {
    return {

        lastPage: "",
        lastRouter:"",
        pageList: [],

        routers: {
            'index': 'home',
            'cart': 'cart',
            'detail-*': 'detail',
            'login': 'login',
        },

        loadPage: function () {

            var hash = window.location.hash.replace("#", "");
            //默认路由
            var hashPath = "home";

            for (var key in this.routers) {
                if (hash.match(key)) {
                    hashPath = this.routers[key];
                    break;
                }
            }
            
            var lastPage = window.location.hash.replace("#", "");
            hash = "Page/" + hashPath;
            

            require([hash], function (page) {
                
                if(_.indexOf(this.pageList, hashPath) == -1){
                    this.pageList.push(hashPath);
                    page._init();
                    page._onLoad(this.lastRouter,this.lastPage);
                }else{
                    page._onLoad(this.lastRouter,this.lastPage);
                }
                this.lastRouter = page.selector;
                this.lastPage = lastPage;

            }.bind(this));

        }
    }
})