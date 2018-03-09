var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SceneLogin = /** @class */ (function (_super) {
    __extends(SceneLogin, _super);
    function SceneLogin() {
        var _this = _super.call(this) || this;
        _this.view = fairygui.UIPackage.createObject("common", "SceneLogin").asCom;
        _this.view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        _this.view.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);
        _this.addChild(_this.view);
        _this.btn_loading = _this.view.getChild("btn_loading").asButton;
        _this.btn_loading.onClick(_this, _this.onLogin);
        return _this;
    }
    SceneLogin.getInstance = function () {
        if (this.instance == null)
            this.instance = new SceneLogin();
        return this.instance;
    };
    SceneLogin.prototype.onLogin = function () {
        this.view.removeChildren();
        this.view.addChild(new LayerMain());
        UI.Toast.show("请输入账号");
    };
    return SceneLogin;
}(fairygui.GComponent));
//# sourceMappingURL=SceneLogin.js.map