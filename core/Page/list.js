define(["View/list","Base/BasePage"],function(view,BasePage){
    return _.clone(_.extend(BasePage,{

        selector:"#list",
        view:view,
        arry:[],
        data:{},
        up:true,

        init:function(){
        
        },
        events:function(){

            console.log('list event');

            $("#list_sort").live('click',this.event_sort.bind(this));
            $("#list_recover").live('click',this.event_recover.bind(this));
            $("#list_author").live('click',this.event_author.bind(this))
        },

        onLoad:function(){
            this.loadData();
        },

        event_sort:function(event){
            var data=_.sortBy(this.arry, 'sales');
            if(this.up){
                this.up=false;
            }else{
                data=data.reverse();
                this.up=true;
            }
            this.render({"list":data});
        },
        event_recover:function(){
            this.render({"list":this.data.data});
        },event_author:function(){
            var data=_.where(this.arry, {author: "春上秋树"});
            this.render({"list":data});
        },

        loadData:function(){
            $.get('http://127.0.0.1:8000/api/list',function(data){
                this.render({"list":data.data});
                this.arry=data.data;
                this.data=data;
            }.bind(this))
        }
    }));
})