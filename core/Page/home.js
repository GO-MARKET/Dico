define(['Base/BasePage', 'View/home','Base/Header'], function (BasePage, view,Header) {
    return _.extend(_.clone(BasePage), {
        //设置当前页面的容器
        selector: '#home',
        //设置视图
        view: view,

        init: function () {

        },

        onLoad: function () {
            //设置 header
            Header.setLeft({logo:function(){

            }}).setCenter({search:function(){

            }}).setRight(null);

            this.showLoading();
            this.loadData();

            // this.showToast('asdasd');
        },
                
        events: function () {
            this.el.delegate('.card','click',this.event_goDetail.bind(this));
        },

        event_goDetail(event){
            var id = $(event.currentTarget).data('id')
            this.go('#detail-'+id);
        },
        
        loadData: function () {

            $.get('http://127.0.0.1:8000/api/index', function (res) {
                //替换并且注入  返回完整HTML内容             
                var html = this.template(
                    //取出模板内容
                    this.el.find('#indexBox_tpl').html(),
                    //注入数据
                    {list:res.data}
                );
                //将内容写入 容器
                this.el.find('#indexBox').html(html);
                this.hideLoading();
                //页面显然完成后执行
                this.render();
            }.bind(this))
        }

    });
});