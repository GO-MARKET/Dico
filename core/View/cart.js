define(function () {
    return ''
    + '<div class="col" id="cartList"></div>\n'
    + '\n'
    + '<script type="text/template" id="cartList_tpl">\n'
    + '    <%_.each(data,function(item){%>\n'
    + '    <div style="height:80px;line-height:80px" class="row">\n'
    + '            <div class="col-2">\n'
    + '                <img src="http://127.0.0.1:8000/<%=item.goods_images%>" style="width:80px;"/>\n'
    + '            </div>\n'
    + '            <div class="col-4" style="line-height:10px;">\n'
    + '                <h6><%=item.goods_name%></h6>\n'
    + '                <span style="font-size:0.5rem"><%=item.goods_title%></span>\n'
    + '            </div>\n'
    + '            <div class="col-2"><span style="color:red"><%=item.goods_price%></span></div>\n'
    + '            <div class="col-2" style="align-self:center">\n'
    + '                <input style="width:4.5rem" data-id="<%= item.goods_id%>" class="form-control" value="<%=item.cartNum%>" type="text">\n'
    + '            </div>\n'
    + '            <div class="col-2"><span style="color:red" id=\'countPrice_<%= item.goods_id  %>\' ><%= (item.goods_price * item.cartNum).toFixed(2) %></span></div>  \n'
    + '    </div>\n'
    + '    <% }) %>\n'
    + '</script>\n'
    + '';
});