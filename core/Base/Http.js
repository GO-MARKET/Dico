define(function() {
    return {
        post:function(url,data,cb,timeout){
            this._request('post',url,cb,data,cb,timeout);
        },
        get:function(url,data,cb,timeout){
            this._request('get',url,cb,data,cb,timeout);
        },
        _request:function(type,url,cb,data,timeout){
            $.ajax({
                //地址
                url: url,
                //请求类型 get post put delete
                type:type,
                //超时时间
                timeout:timeout || 2000,
                //请求数据
                data: data||null ,
                //指定返回数据类型 text html json jsonp xml script 不写返回类型均为 text
                dataType:'json',
                //是否启用缓存, 建议关闭 避免接口数据不刷新
                // cache:false,
                beforeSend:function(xhr,settings){
                    var token = window.localStorage.getItem('token')
                    if(token){
                        xhr.setRequestHeader('token',token)
                    }
                },
                //成功函数
                success: function(res) {
                    cb(res,null)
                },
    
                //错误 
                error:function(error){
                    cb(null,error)
                }
              
            })
        }
    }
});