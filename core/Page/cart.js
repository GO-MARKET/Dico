define(['Base/BasePage', 'View/cart','Base/Header','Base/CartAction'], function (BasePage, view,Header,CartAction) {
    return _.extend(_.clone(BasePage), {

        selector: '#cart',
        view: view,

        init: function () {

        },

        onLoad: function () {
            //设置 header
            Header.setLeft({back:function(){
                this.back(this.lastPage);
            }.bind(this)}).setCenter({title:'结算'}).setRight(null);
            this.setView();
        },
                
        events: function () {
            this.el.delegate('.form-control','keyup',this.event_keyUp.bind(this));
        },
        event_keyUp:function(event){
            
            var  num = $(event.currentTarget).val();
            num = num.replace(/[^\d]/g, "")
            num <= 0 && (num = 1);
            $(event.currentTarget).val(num);
            var id = $(event.currentTarget).data('id')
            var info = CartAction.updateNum(id,num)
            this.el.find('#countPrice_'+id).html( (info.goods_price * num).toFixed(2) );
        },
        
        setView: function () {

            this.data = CartAction.get();
            var html = this.template(
                this.el.find('#cartList_tpl').html(),
                {data:this.data}
            );
            this.el.find('#cartList').html(html);
            this.render();
        }

    });
});