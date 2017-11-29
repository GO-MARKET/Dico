define(["View/detail","Base/BasePage",'Base/Header'], function (View, BasePage,Header) {

    return _.extend(_.clone(BasePage), {
        selector: "#detail",
        view: View,

        init: function () {
           
        },
        events:function(){
            $(this.selector).delegate('#listBox .card','click',this.event_goDetail.bind(this));
        },
        event_goDetail(event){
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

                var html = this.template(
                    this.el.find('#detailBox_tpl').html(),
                    {data:res.data}
                );
                this.el.find('#detailBox').html(html);
                Header.setCenter({title:res.data.goods_name});
                this.render();

                $.get('http://127.0.0.1:8000/api/author?author='+res.data.goods_author,function(res1){

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