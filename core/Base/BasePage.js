define(function () {
    return {
        view: '',
        selector: '',
        el : null,

        _init: function (lastPage) {
            //判断页面是否初始化
            if (!$(this.selector).length) {
                //添加内容
                $("#pageBox").append('<div class="" id="' + this.selector.replace("#", "") + '"></div>')
                //写入模板
                $(this.selector).html(this.view).hide();
            }
            //可选项 避免每次都使用 $(this.selector)
            this.el = $(this.selector);
            //调用页面的初始化方法
            this.init();
            //绑定事件
            this.events();
        },
        //避免方法不存在 写的空方法
        init: function () {

        },

        _onLoad:function(lastPage){
            //存储上一个页面
            this.lastPage = lastPage;
            this.onLoad();
        },

        onLoad: function (lastPage) {

        },

        events: function () {
            
        },
        //模板内容替换 和 变量注入
        template: function (view , data) {
            var template = _.template(view);
            var html = template(data);
            return html;
        },
        //渲染页面 并显示
        render:function(){
            //如果是同一个页面 不做缩小的特效
            this.lastPage!=this.selector &&  $(this.lastPage).addClass('pt-page-scaleDown');
            //显示页面并且增加特效
            $(this.selector).addClass(WebApp.pageStyle).show();

            //动画执行结束
            setTimeout(function() {
                //如果是同一个页面 不删除缩小特效
                this.lastPage!=this.selector && $(this.lastPage).removeClass('pt-page-scaleDown').hide();
                //删除当前页面的显示特效
                $(this.selector).removeClass(WebApp.pageStyle);
            }.bind(this),525);
            //页面成功显示后 滚动条移动到顶部
            $(window).scrollTop(0);
        },


        //显示一个 提示
        showToast:function(text,time){
            $('#toast p').html(text);

            $('#modal').show();
            $('#toast').show();

            var clear =  setTimeout(function(){
                $('#modal').hide();
                $('#toast').hide();  
            },time||2000)

            $('#toast').one('click',function(){
                clearTimeout(clear);
                $('#modal').hide();
                $('#toast').hide();
            });
        },
        //显示 loading 图
        showLoading:function(){
            $('#modal').show();
            $('#loading').show()
        },
        //隐藏loading
        hideLoading:function(){
            $('#modal').hide();
            $('#loading').hide();
        },
        //前进
        go:function(hash){
            WebApp.pageStyle = 'pt-page-go';
            window.location.hash=hash
        },
        //后退
        back:function(hash){
            WebApp.pageStyle = 'pt-page-back';
            window.location.hash=hash
        }


    }
})