define(['Base/BasePage', 'View/cart','Base/Header'], function (BasePage, view,Header) {
    return _.extend(_.clone(BasePage), {

        selector: '#cart',
        view: view,

        init: function () {

        },

        onLoad: function () {
            //设置 header
            Header.setLeft({logo:function(){

            }}).setCenter({search:function(){

            }}).setRight(null);
            this.render();
            // this.showToast('asdasd');
        },
                
        events: function () {
            
        },

        event_goDetail(event){
        
        },
        
        loadData: function () {

        }

    });
});