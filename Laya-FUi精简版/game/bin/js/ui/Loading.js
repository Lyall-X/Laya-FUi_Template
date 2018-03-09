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
    var Loading = /** @class */ (function (_super) {
        __extends(Loading, _super);
        function Loading() {
            var _this = _super.call(this) || this;
            _this.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
            _this.view = fairygui.UIPackage.createObject("common", "loading").asCom;
            _this.addChild(_this.view);
            _this.view.center();
            _this.img_loading = _this.view.getChild("img_loading").asImage;
            _this.lbl_progress = _this.view.getChild("lbl_progress").asTextField;
            _this.setProgress(0, 1);
            return _this;
        }
        Loading.getInstance = function () {
            if (this.instance == null)
                this.instance = new Loading();
            return this.instance;
        };
        Loading.prototype.runLoading = function () {
            this.img_loading.rotation += 3;
        };
        Loading.prototype.setProgress = function (itemsLoaded, itemsTotal) {
            if (this.lbl_progress) {
                this.lbl_progress.text = Math.round(itemsLoaded / itemsTotal * 100) + "%";
            }
        };
        return Loading;
    }(fairygui.GComponent));
    UI.Loading = Loading;
})(UI || (UI = {}));
//# sourceMappingURL=Loading.js.map