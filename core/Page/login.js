define(["View/login","Base/BasePage"],function(view,basepage){
    return _.clone(
        _.extend(basepage,{
            selector:"#login",
            view:view,

  
            init:function(){
              
            },
            //绑定按钮
            events:function(){
                $('#login_btn').live('click',this.event_login.bind(this));
            },

            onLoad:function(){
                this.render();
            },
            
            event_login:function(event){
                var name=$("#name").val();
                var psd=$("#psd").val();
                this.loadData(name,psd);
            },
            loadData:function(name,psd){
                
                $.post('http://127.0.0.1:8000/api/login',{
                    username:name,
                    password:psd
                },function(data){
                   if(data.code==1){
                       window.location.hash="list";
                   }
                })
            }
        })
    )
})