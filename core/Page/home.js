define(['Base/BasePage', 'View/home'], function (BasePage, view) {
    return _.extend(_.clone(BasePage), {

        selector: '#home',
        view: view,

        arry:[],
        data:[],

        init: function () {
            console.log('init');
            
        },

        onLoad: function () {
            // this.showLoading();
            this.loadData();
            this.showToast('asdasdfasdfasdf');
        },

        events: function () {
            console.log('home event');
            $("#list_sort").live('click', this.event_sort.bind(this));
            $("#list_recover").live('click', this.event_recover.bind(this));
            $("#list_author").live('click', this.event_author.bind(this))
        },

        event_sort: function (event) {
            var data = _.sortBy(this.arry, 'sales');
            if (this.up) {
                this.up = false;
            } else {
                data = data.reverse();
                this.up = true;
            }
            this.render({ "list": data });
        },

        event_recover: function () {
            this.render({ "list": this.data });
        }, 
        
        event_author: function () {
            var data = _.where(this.arry, { author: "春上秋树" });
            this.render({ "list": data });
        },


        loadData: function () {

            $.get('http://127.0.0.1:8000/api/list', function (res) {
                this.render({ list: res.data });
                this.arry=res.data;
                this.data=res.data;
                // this.hideLoading();
            }.bind(this))
        }

    });
});