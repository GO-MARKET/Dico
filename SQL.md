#浏览器的村粗对象

## 增

```sql
INSERT INTO 表名 (列名,列名) values(值,值);
INSERT into  表名 set 列名=值 , 列名=值 
```

## 删除
```sql
DELETE FROM 表名 where `列名` = '值' and `列名` = '值' or `列名` = '值'
```

## 改
```sql
UPDATE 表名 set 列名=值 WHERE 列名=值
```

## 查询
```sql
#单表
select * FROM 表明 
#多表
select * FROM 表明1 as 别名1 join 表明2 as 别名2 on(别名1.分类id = 表明2.分类id )
where `列名` = '值';
select * FROM 表明1 , 表明2  where 表明2.分类id = 别名2.分类id and 表明1.字段名 > 100;
#查看作者 有多少个书
select  goods_author,count(goods_id) as 'count' from c_goods GROUP By goods_author ORDER BY count asc
```