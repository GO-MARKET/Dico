define(["View/detail","Base/BasePage",'Base/Header','Base/CartAction'], function (View, BasePage,Header,CartAction) {

    return _.extend(_.clone(BasePage), {
        selector: "#detail",
        view: View,

        detail:{},
        list:[],
        

        init: function () {
           
        },
        events:function(){
            //
            $(this.selector).delegate('#listBox .card','click',this.event_goDetail.bind(this));
            $(this.selector).delegate('.event_addCart','click',this.event_addCart.bind(this));
        },
        event_addCart(event){

            console.log('event_addCart')
            var id = $(event.currentTarget).data('id');
            if(this.detail.goods_id == id){
                CartAction.addCart(id,this.detail);
            }else{
                var goodsInfo =  _.find(this.list,function(item){
                    return item.goods_id == id;
                })
                CartAction.addCart(id,goodsInfo);
            }
           
            this.showToast('添加成功');
        },
        event_goDetail(event){
            
            if($(event.target).attr('class').indexOf('event_addCart')>-1){
                return false;
            }
            var id = $(event.currentTarget).data('id')

            this.go('#detail-'+id);
        },
        onLoad: function () {

            Header.setLeft({back:function(){
                this.back('#home')
            }.bind(this)}).setRight(null);

            this.showLoading();
            this.loadData();
        },

        loadData: function () {
            var id = window.location.hash.replace("#detail-", "");
            $.get('http://127.0.0.1:8000/api/detail', { id: id }, function (res) {
                this.detail = res.data;
                var html = this.template(
                    this.el.find('#detailBox_tpl').html(),
                    {data:res.data}
                );
                this.el.find('#detailBox').html(html);
                Header.setCenter({title:res.data.goods_name});
                this.render();

                $.get('http://127.0.0.1:8000/api/author?author='+res.data.goods_author,function(res1){
                    this.list = res1.data;
                    var html = this.template(
                        this.el.find('#listBox_tpl').html(),
                        {list:res1.data}
                    )
                    this.el.find('#listBox').html(html);

                }.bind(this))


                this.hideLoading();
            }.bind(this));

            
        }
    });
})