WebApp = {
    pageSwitch:0,
    pageStyle:'',
}

require.config({
    urlArgs: 'v=1.1',
    baseUrl:'core',
});

define(["Base/Router"],function(Router){
    Router.loadPage();
    window.onhashchange = function(event){
        console.log(window.location.hash);
        Router.loadPage();
    };
});