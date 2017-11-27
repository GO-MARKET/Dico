WebApp = {
    pageSwitch:0,
    pageStyle:null,
}

require.config({
    baseUrl:'core',
});

define(["Base/Router"],function(Router){
    Router.loadPage();
    window.onhashchange = function(event){
        Router.loadPage();
    };
});