define(function () {
    return {

        lastPage: "",
        pageList: [],

        routers: {
            'index': 'home',
            'list': 'list',
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
                    page.onLoad(this.lastPage);
                }else{
                    $(this.lastPage).hide();
                    page.onLoad(this.lastPage);
                    $(page.selector).show();
                }
                this.lastPage = page.selector;

            }.bind(this));

            


        }
    }
})