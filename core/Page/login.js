define(["View/login","Base/BasePage",'Base/Http'],function(view,basepage,Http){
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
                this.render();
            },
            
            event_login:function(event){
                var name=$("#name").val();
                var psd=$("#psd").val();
                this.loadData(name,psd);
            },
            loadData:function(name,psd){
                
                Http.post('http://127.0.0.1:8000/user/login',{
                    username:name,
                    password:psd
                },function(res,error){
                   if(res.code==1){
                       var  token = res.data.token ;
                       window.localStorage.setItem('token',token);
                        this.go(this.lastPage);
                   }
                }.bind(this))
            }
        })
    )
})