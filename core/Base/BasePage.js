define(function () {
    return {
        view: '',
        selector: '',

        _init: function (lastPage) {
            if (!$(this.selector).length) {
                $("#pageBox").append('<div class="" id="' + this.selector.replace("#", "") + '"></div>')
            }
            $(this.selector).show();

            this.init();
            this.events();
        },

        init: function () {

        },

        _onLoad:function(lastPage){

            this.onLoad();

            $(this.selector).addClass(WebApp.pageStyle);
            setTimeout(function() {
                $(this.selector).removeClass(WebApp.pageStyle);
            },525);
        },

        onLoad: function (lastPage) {

        },

        events: function () {
            console.log('Base Events');
        },
        render: function (data) {
            var template = _.template(this.view);
            var html = template(data);
            $(this.selector).html(html);
        },

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
        showLoading:function(){
            $('#modal').show();
            $('#loading').show()
        },
        hideLoading:function(){
            $('#modal').hide();
            $('#loading').hide();
        },

        go:function(hash){
            if (!WebApp.pageSwitch) {
                $(window).scrollTop(0);
                WebApp.pageStyle = 'pt-page-go';
                WebApp.pageSwitch = 1
                $(this.selector).addClass('pt-page-scaleDown'),
                setTimeout(function() {
                    $(this.selector).removeClass("pt-page-scaleDown").hide(),
                    WebApp.pageSwitch = 0
                }.bind(this),300);
                window.location.hash=hash
            }
        },

        back:function(hash){
            if (!WebApp.pageSwitch) {
                $(window).scrollTop(0)
                WebApp.pageStyle = 'pt-page-back';
                WebApp.pageSwitch = 1;
                $(this.selector).addClass('pt-page-scaleDown'),
                setTimeout(function() {
                    $(this.selector).removeClass("pt-page-scaleDown").hide(),
                    WebApp.pageSwitch = 0
                }.bind(this),300);
                window.location.hash=hash
            }
        }


    }
})