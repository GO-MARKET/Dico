define(function () {

    var header =  {

        selector: 'header',
        el:null,

        els:{},

        _init: function (lastPage) {
            this.el = $('#'+this.selector);
            this.els = {
                logo:function(){

                    return "<div class='logoEvent' >logo</div>"
                },
                search:function(){
                    return "<div class=''><input type='text' /> <button class='searchEvent'></button></div>"
                },
                me:function(){
                    return "<div class='meEvent' >me</div>"
                }
            }
        },

        setLeft:function(els){
            console.log('setLeft')

            this.el.find('#header_left').html('');

            _.each(els,function(eventFun,key){
                
                if(!this.els[key]){
                    return;
                }
                var getElement = this.els[key];

                var elementString = getElement();
                this.el.find('#header_left').append(elementString);
                this.el.find('.'+key+'Event').click(eventFun);

            }.bind(this))

            return this;
        },
        setCenter:function(els){
            console.log('setLeft')
            this.el.find('#header_center').html('');

            _.each(els,function(key){

                if(!this.els[key]) return;

                var fun = this.els[key];
                var el = fun();
                this.el.find('#header_center').append(el);

            }.bind(this))

            return this;
        },
        setRight:function(els){

          
            
            console.log('setLeft')
            this.el.find('#header_right').html('');
            _.each(els,function(key){
                if(!this.els[key]) return;
                var fun = this.els[key];
                var el = fun();
                this.el.find('#header_right').append(el);
            }.bind(this))

            return this;
        }

    }

    header._init();
    return  header;
})