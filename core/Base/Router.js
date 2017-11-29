define(function () {
    return {

        lastPage: "",
        pageList: [],

        routers: {
            'index': 'home',
            'cart': 'cart',
            'detail-*': 'detail',
            'login': 'login',
        },

        loadPage: function () {

            var hash = window.location.hash.replace("#", "");
            var hashPath = "home";

            for (var key in this.routers) {
                if (hash.match(key)) {
                    hashPath = this.routers[key];
                    break;
                }
            }

            hash = "Page/" + hashPath;

            require([hash], function (page) {
                
                if(_.indexOf(this.pageList, hashPath) == -1){
                    this.pageList.push(hashPath);
                    page._init(this.lastPage);
                    page._onLoad(this.lastPage);
                }else{
                    page._onLoad(this.lastPage);
                }
                this.lastPage = page.selector;

            }.bind(this));

            


        }
    }
})