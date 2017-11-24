define(["View/detail", "Base/BasePage",'Base/Header'], function (View, BasePage,Header) {
    return _.extend(_.clone(BasePage), {
        selector: "#detail",
        view: View,

        init: function () {
           
        },
        events:function(){
            
        },
        onLoad: function () {

            Header.setLeft({
                me:function(){
                    console.log('detail click me')
                },
                logo:function(){
                    console.log('detail click logo')
                }
            });

            this.showLoading();
            this.loadData();
        },

        loadData: function () {
            var id = window.location.hash.replace("#detail-", "");
            $.get('http://127.0.0.1:8000/api/detail', { id: id }, function (data) {
                this.render({
                    "id": data.data.id,
                    "name": data.data.name,
                    "author": data.data.author,
                    "description": data.data.description,
                    "price": data.data.price,
                    "sales": data.data.sales
                });
                this.hideLoading();
            }.bind(this))
        }
    });
})