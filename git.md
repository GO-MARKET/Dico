# Git 使用说明

## 克隆代码
```
    git clone https://github.com/GO-MARKET/Dico.git
```

## 查看状态
```
    git status
```

## 查看修改

```
    git diff
```

## 在提交中添加文件
```
    git add * 
    git add ./xxx/xxx.js
```

## 提交
```
    git commit -m "console"
```

## 推送到服务器上

origin 远程服务器 <br>
master 分支名


```
    git push origin master
```

## 合并代码

git fetch 下载
git merge  合并
git pull origin master 下载并且合并

##还原单个文件
git checkout core/Page/detail.js

##还原某文件夹下所有文件
git checkout ./*



