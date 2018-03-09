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
var SceneMain = /** @class */ (function (_super) {
    __extends(SceneMain, _super);
    function SceneMain() {
        var _this = _super.call(this) || this;
        _this.name = "SceneMain";
        GameContainer.getInstance().uiRoot = _this;
        _this.addChild(new fairygui.GComponent()); //Page
        UIManager.getInstance().loadUI("layerMain");
        return _this;
    }
    SceneMain.getInstance = function () {
        if (this.instance == null)
            this.instance = new SceneMain();
        return this.instance;
    };
    return SceneMain;
}(fairygui.GComponent));
//# sourceMappingURL=SceneMain.js.map