define(function () {

    var header =  {

        selector: 'header',
        el:null,

        els:{},

        _init: function (lastPage) {
            this.el = $('#'+this.selector);
            var self = this;
            this.els = {
                logo:function(){
                    return '<a class="event_logo navbar-brand" href="#"><img src="assets/img/logo.svg" width="30" height="30" class="d-inline-block align-top" alt=""> Dico </a>'
                },
                back:function(){
                    return '<a class="event_back navbar-brand" ><i class="icon ion-chevron-left"></i></a>'
                },
                search:function(){
                    self.el.find('.header_center').addClass('col-9').removeClass('col-6');
                    self.el.find('.header_riight').hide();
                    return '<input class="event_search form-control" type="search" style="width:100%" placeholder="Search" >';
                },
                title:function(title){
                    self.el.find('.header_center').addClass('col-6').removeClass('col-9');
                    self.el.find('.header_riight').show();
                    return '<a class="event_back navbar-brand" href="#">'+title+'</a>';
                },
                me:function(){
                    return "<div class='meEvent' >me</div>"
                }
            }
        },
        setLeft(els){
            
            $(this.el.find('.header_left').html(''));
            
            _.each(els,function(eventFun,key){
                if(!this.els[key]) return;
                var el = this.els[key];
                this.el.find('.header_left').append(el());
                this.el.find('.header_left .event_'+key).on('click',eventFun)
            }.bind(this))

            $(this.el.find('.header_left').show());
            return this;
        },
        setCenter(els){
            
            $(this.el.find('.header_center').html(''));
            

            _.each(els,function(eventFun,key){
                if(!this.els[key]) return;
                var el = this.els[key];

                if(key=='title'){
                    this.el.find('.header_center').append(el(eventFun));
                }else{
                    this.el.find('.header_center').append(el());
                    this.el.find('.header_center .event_'+key).on('click',eventFun)
                }
                
            }.bind(this))

            $(this.el.find('.header_center').show());
            return this;

        },
        setRight(els){

            if(!els){
                $(this.el.find('.header_right').html(''));
            }

            _.each(els,function(eventFun,key){
                if(!this.els[key]) return;
                var el = this.els[key];
                this.el.find('.header_right').append(el());
                this.el.find('.header_right .event_'+key).on('click',eventFun)
            }.bind(this))

            $(this.el.find('.header_right').show());
            return this;
        }
    }

    header._init();
    return  header;
})