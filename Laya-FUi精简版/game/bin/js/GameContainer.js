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
var GameContainer = /** @class */ (function (_super) {
    __extends(GameContainer, _super);
    function GameContainer() {
        var _this = _super.call(this) || this;
        _this.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        UI.Toast.init(_this);
        _this.loadScene(new SceneLogin());
        return _this;
    }
    GameContainer.getInstance = function () {
        if (this.instance == null)
            this.instance = new GameContainer();
        return this.instance;
    };
    GameContainer.prototype.loadScene = function (element) {
        this.removeChildren();
        this.addChild(element);
    };
    return GameContainer;
}(fairygui.GComponent));
//# sourceMappingURL=GameContainer.js.map