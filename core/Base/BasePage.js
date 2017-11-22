define(function () {
    return {
        view: '',
        selector: '',

        _init: function (lastPage) {

            $(lastPage).hide();
            if (!$(this.selector).length) {
                $("#main").append('<div id="' + this.selector.replace("#", "") + '"></div>')
            }
            $(this.selector).show();

            this.init();
            this.events();
        },

        init: function () {

        },

        onLoad: function () {

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
            },time||5000)

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
        }

    }
})