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