require.config({
    baseUrl:'core',
});

define(["Base/Router"],function(Router){

    Router.loadPage();
    window.onhashchange=function(){
        Router.loadPage();
    }

})