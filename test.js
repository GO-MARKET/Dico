define(["Base/Plugin", "Base/TrainModel"], function (Plugin, Model) { 
    var view = Backbone.View.extend({ 
        viewId: "", option: {}, Nodes: {}, 
        initialize: function (a) { 
            this.viewId = a.replace("/", "_"), 
            this.$el.attr("id", this.viewId), this.init() }, 
        events: {}, 
        init: function () { },
         _onLoad: function (a) { Plugin.init(this.viewId), this.Plugin = Plugin, this.onLoad(a) },
          onLoad: function () { }, 
          initHead: function () { }, 
          loadData: function () { }, 
          onShow: function () { }, 
          onHide: function () { },
        forward: function (a) { 
               WebApp.pageSwitch || (this.onHide(), Plugin.onHide(), 
               this.option.lastView = this.viewId, 
               this.option.showStyle = "forward", 
               window.location.hash = a) }, 
        back: function (a) { 
            WebApp.pageSwitch || (this.onHide(), Plugin.onHide(), 
            this.option.lastView = this.viewId, 
            this.option.showStyle = "back", 
            window.location.hash = a) }, 
    _forward: function (a, b) { 
        if (!WebApp.pageSwitch) {
             WebApp.pageSwitch = !0; { 
                 var c = this.$el; $("#" + a) } c.siblings("div:visible").addClass("pt-page-scaleDown"),
                  c.addClass("pt-page-forward").show(), 
                  setTimeout(function () { c.siblings("div:visible").removeClass("pt-page-scaleDown").hide(),
                   c.removeClass("pt-page-forward"), b(), WebApp.pageSwitch = !1 }, 525) } },
 _back: function (a, b) { 
     if (!WebApp.pageSwitch) {
          WebApp.pageSwitch = !0; { var c = this.$el; $("#" + a) } c.siblings("div:visible").addClass("pt-page-scaleDown"), c.addClass("pt-page-back").show(),
           setTimeout(function () { c.siblings("div:visible").removeClass("pt-page-scaleDown").hide(), c.removeClass("pt-page-back"), b(),
            WebApp.pageSwitch = !1 }, 525) } }, turning: function (a) { var b = this; a && a(), $("#mainBox").append(this.$el), $(document).scrollTop(0),
             Plugin.onShow(), _.isEmpty(this.option) ? (this.$el.siblings("div").hide(), this.$el.show(), this.onShow()) : "back" == this.option.showStyle ?
              this._back(this.option.lastView, function () { b.onShow() }) : this._forward(this.option.lastView, function () { b.onShow() }) }, 
        showLoad: function (a) { if (0 == $("#loading").length) { var b = '<div id="loading" class="tipLoad"><div class="loader"></div></div>'; 

        $("#diolog").append($(b)) } a && (document.getElementById("modal").style.zIndex = a), $("#modal").show(), $("#loading").show() },
         hideLoad: function (a) { document.getElementById("modal").style.zIndex = 100, a || $("#modal").hide(), $("#loading").hide() }, 
         showToast: function (a, b, c) { var d = !0, e = this; $("#modal").fadeIn(), $("#toast").find("p").html(a), $("#toast").fadeIn(), 
         setTimeout(function () { d && ($("#modal").fadeOut(), $("#toast").fadeOut(), c && c.apply(e)) }, b || 2e3), 
         $("#modal").one("tap", function () { d = !1, $("#modal").fadeOut(), $("#toast").fadeOut(), c && c.apply(e) }) }, 
         showSingleConfirmDiv: function (a) { $("#know").find("#ktitle").html(a.title), $("#know").find("p").html(a.message),
          $("#know").find("#kbutton").html(a.buttons[0].text), $("#modal").fadeIn(), $("#know").fadeIn(), 
          $("#kbutton").unbind("click"), $("#kbutton").one("click", a.buttons[0].click), a.buttons.length > 1 ? 
          $(".close").one("tap", a.buttons[1].click) : ($(".close").one("tap", function () { $("#modal").fadeOut(), $("#know").fadeOut() }),
           $("#kbutton").one("click", function () { $("#modal").fadeOut(), $("#know").fadeOut() })) }, 
           showConfirmDiv: function (a) { $("#confirmD").find("#ctitle").html(a.title),
            $("#confirmD").find("p").html(a.message),
             $("#confirmD").find("#cbuttonF").html(a.buttons[0].text),
              $("#confirmD").find("#cbuttonS").html(a.buttons[1].text),
               $("#modal").fadeIn(), $("#modal").unbind("tap"), $("#confirmD").fadeIn(), 
               $("#cbuttonF").unbind("click"), $("#cbuttonF").one("click", a.buttons[0].click),
                $("#cbuttonS").unbind("click"), $("#cbuttonS").one("click", a.buttons[1].click),
                 $("#cbuttonF").one("click", function () { $("#modal").fadeOut(), $("#confirmD").fadeOut() }), 
                 $(".close").one("tap", function () { $("#modal").fadeOut(), $("#confirmD").fadeOut() }), 
                 $("#cbuttonS").one("click", function () { $("#modal").fadeOut(), $("#confirmD").fadeOut() }) },
                  alert: function (a) { $("#custom").attr("class", "tipBox"); var b = ""; b += "<h4>" + (a.title ? 
                    a.title : "温馨提示") + "</h4>", b += '<a href="javascript:void(0);" class="close"></a>', b += "<p>" + a.msg + "</p>", b += '<button class="btnBlueBig">' +
                     (a.btnString ? a.btnString : "知道了") + "</button>", $("#modal").show(), $("#custom").html(b).fadeIn(350); "-" + $
                     ("#custom").width() / 2 + "px"; $("#custom").css("margin-top", "-109px"), $("#custom .close").unbind("tap"), 
                     $("#custom .close").one("tap", function (a) { $(a.currentTarget); $("#modal").fadeOut(350), $("#custom").fadeOut(350), 
                     a.preventDefault(), document.activeElement.blur() }), $("#custom button").unbind("tap"), $("#custom button").one("tap", 
                     function (a) { $(a.currentTarget); $("#modal").fadeOut(350), $("#custom").fadeOut(350), a.preventDefault(), 
                     document.activeElement.blur() }) }, showLogin12306: function (config) { var self = this, callback = function (a)
                         { self.hideLoad(!0), $("#login_12306_warn").html(a).slideDown(), setTimeout(function () { $("#login_12306_warn").slideUp() }, 2e3) };
                          $("#login_12306 .loginName input").val(config.user_name), $("#login_12306 .loginPsword input").val(config.user_pass), $("#modal").fadeIn(),
                           $("#login_12306").fadeIn(), $(".close").one("tap", function () { $("#modal").fadeOut(), $("#login_12306").fadeOut() }), $("#haveAccount").
                           unbind("click"), $("#haveAccount").bind("click", function () { self.showLoad(110), _czc.push(["_trackEvent", "铁友新版H5", "12306登录", "", 1])
                           ; var user_name = $("#login_12306 .loginName input").val(), user_pass = $("#login_12306 .loginPsword input").val(); if ("" === user_name) 
                           return callback("请输入用户名"), !1; if ("" === user_pass) return callback("请输入密码"), !1; var success = function (data) { if (200 == data.code
                        ) if (data = eval("(" + data.data + ")"), 0 == data.Code) { var cnt = 1, suc = function (res) { 200 == res.code && (res = eval("(" + res.data + ")"),
                         res.Code >= 0 && res.Code <= 2 ? (config.buttons[0].click(user_name, user_pass), $("#modal").fadeOut(), $("#login_12306").fadeOut()) : 3 == res.Code ?
                          cnt > 10 ? (config.buttons[0].click(user_name, user_pass), $("#modal").fadeOut(), $("#login_12306").fadeOut()) : 
                          (setTimeout(function () { Model.validate12306.exec(suc, err) }, 2e3), cnt++) : callback(res.Message)) }, err = function () {
                               callback("网络异常，请稍后再试！") }; Model.validate12306.param = { type: "accountStatusResult",
                                UserName: user_name, PassWord: user_pass, RequestKey: data.RequestKey }, Model.validate12306.exec(suc, err) } else config.buttons[0].click() },
                                 error = function () { callback("网络异常，请稍后再试！") }; 
                                 Model.validate12306.param = { type: "checkUserAccountV2", UserName: user_name, PassWord: user_pass },
                                  Model.validate12306.exec(success, error) }), $("#noAccount").unbind("click"), 
                                  $("#noAccount").bind("click", function () { _czc.push(["_trackEvent", "铁友新版H5", "12306登录无账号", "", 1]),
                                   $("#modal").fadeOut(), $("#login_12306").fadeOut(), config.buttons.length > 1 && config.buttons[1].click() }) }, 
                                   hideShadow: function () { $("#recPassport .shadow").one("click", function () { $("#recPassport").hide() }), 
                                   $("#recPassport .closed").one("click", function () { $("#recPassport").hide() }) } }); return view });