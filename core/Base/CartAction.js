define(function() {


    return {
        key:'cartList',
        addCart:function(id,info){

            var data = [];


            if(window.localStorage.hasOwnProperty(this.key)){
                data =  JSON.parse(window.localStorage.getItem(this.key));

                var goodsIndex =  _.findIndex(data,function(item){
                    return item.goods_id == id;
                })
                if(goodsIndex > -1){
                    var oldData = data[goodsIndex];
                    info.cartNum = oldData.cartNum + 1;
                    info.addTime = new Date().getTime()
                    data[goodsIndex] = info
                }else{
                    info.cartNum = 1;
                    info.addTime = new Date().getTime()
                    data.push(info)
                }

            }else{
                info.cartNum = 1;
                info.addTime = new Date().getTime()
                data.push(info)
            }
            window.localStorage.setItem(this.key,JSON.stringify(data));
        },
        delCart:function(id){
            window.localStorage.removeItem(id)
        },

        updateNum:function(id,num){
            data =  JSON.parse(window.localStorage.getItem(this.key));
            var goodsIndex =  _.findIndex(data,function(item){
                return item.goods_id == id;
            });
            var info = data[goodsIndex]
            info.cartNum = num;
            data[goodsIndex] = info

            window.localStorage.setItem(this.key,JSON.stringify(data));
            return info
        },

        get:function(){
            return JSON.parse(window.localStorage.getItem(this.key));
        }
    }
});