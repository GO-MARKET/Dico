define(function () {
    return {
        view: '',
        selector: '',
        el : null,

        _init: function () {
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

        _onLoad:function(lastRouter,lastPage){
            //存储上一个页面
            this.lastRouter = lastRouter;
            this.lastPage = lastPage
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
            this.lastRouter != this.selector &&  $(this.lastRouter).addClass('pt-page-scaleDown');
            //显示页面并且增加特效
            $(this.selector).addClass(WebApp.pageStyle).show();

            //动画执行结束
            setTimeout(function() {
                //如果是同一个页面 不删除缩小特效
                this.lastRouter != this.selector && $(this.lastRouter).removeClass('pt-page-scaleDown').hide();
                //删除当前页面的显示特效
                $(this.selector).removeClass(WebApp.pageStyle);
            }.bind(this),525);
            //页面成功显示后 滚动条移动到顶部
            $(window).scrollTop(0);
        },


        //显示一个 提示
        showToast:function(text,cb,time){
            $('#toast p').html(text);

            $('#modal').show();
            $('#toast').show();

            var clear =  setTimeout(function(){
                $('#modal').hide();
                $('#toast').hide(); 
                cb && cb()
            },time||2000)

            $('#toast').one('click',function(){
                clearTimeout(clear);
                $('#modal').hide();
                $('#toast').hide();
                cb && cb()
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

        showConfirm:function(data){

            $("#confirm").find("#ctitle").html(data.title),
            $("#confirm").find("p").html(data.message),

            $("#confirm").find("#cbuttonF").html(data.buttons[0].text),
            $("#confirm").find("#cbuttonS").html(data.buttons[1].text),
            $("#confirm").fadeIn(),
            $("#cbuttonF").unbind("click"),
            $("#cbuttonF").one("click", data.buttons[0].click),
            $("#cbuttonS").unbind("click"),
            $("#cbuttonS").one("click", data.buttons[1].click),
            $("#cbuttonF").one("click",function() {
                $("#modal").fadeOut(),
                $("#confirm").fadeOut()
            }),
            $(".close").one("click",function() {
                $("#modal").fadeOut(),
                $("#confirm").fadeOut()
            }),
            $("#cbuttonS").one("click",function() {
                $("#modal").fadeOut(),
                $("#confirm").fadeOut()
            })
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