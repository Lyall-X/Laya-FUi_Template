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
var UI;
(function (UI) {
    var PageBase = /** @class */ (function (_super) {
        __extends(PageBase, _super);
        function PageBase(page) {
            var _this = _super.call(this) || this;
            _this.pageName = page;
            _this.view = new fairygui.GComponent();
            if (page) {
                _this.view = fairygui.UIPackage.createObject("page", page).asCom;
                _this.view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
                _this.view.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);
                _this.addChild(_this.view);
            }
            _this.on(Laya.Event.DISPLAY, _this, _this.onAddToStage);
            _this.on(Laya.Event.UNDISPLAY, _this, _this.onRemoveFromStage);
            return _this;
        }
        PageBase.prototype.onAddToStage = function () { };
        PageBase.prototype.onRemoveFromStage = function () { };
        PageBase.prototype.close = function () {
        };
        return PageBase;
    }(fairygui.GComponent));
    UI.PageBase = PageBase;
})(UI || (UI = {}));
//# sourceMappingURL=PageBase.js.map