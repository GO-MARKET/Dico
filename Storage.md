#浏览器的村粗对象

## Loacl Storage
LocalStorage 永久存储
虽然不限制 但是不尽量不要超过2m
```js
window.localStorage.setItem('key','value'); //设置
window.localStorage.getItem('key'); //获取
window.localStorage.removeItem('key') // 删除
window.localSotrage.length  //获取数量
window.localStorage.clear() //清除所有
window.localStorage.hasOwnProperty('key') //是否存在


```

## Session Storeage
LocalStorage 只存储当前会话 浏览器关闭后 数据消失
虽然不限制 但是不尽量不要超过2m

```js
window.sessionStorage.setItem('key','value'); //设置
window.sessionStorage.getItem('key'); //获取
window.sessionStorage.removeItem('key') // 删除
window.localSotrage.length  //获取数量
window.sessionStorage.clear() //清除所有
window.sessionStorage.hasOwnProperty('key') //是否存在
```

## Cookies
Cookie 的数据不能超过4k  每个http请求不会自带
```js
	//字符串
    window.document.cookie
```