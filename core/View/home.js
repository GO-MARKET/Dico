define(function () {
    return ''
    + '<div class="list-group">\n'
    + '    <%_.each(list,function(item){%>\n'
    + '        <a href="#detail-<%=item.id%>" class="list-group-item"><%=item.name%></a>\n'
    + '    <%})%>\n'
    + '    <br>\n'
    + '    <button id="list_sort" class="btn btn-primary">排序</button>\n'
    + '    <br>\n'
    + '    <button id="list_recover" class="btn btn-primary">还原</button>\n'
    + '    <br>\n'
    + '    <button id="list_author" class="btn btn-primary">春上秋树</button>\n'
    + '</div>';
});