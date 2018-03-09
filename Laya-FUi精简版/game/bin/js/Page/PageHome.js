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
    var PageHome = /** @class */ (function (_super) {
        __extends(PageHome, _super);
        function PageHome() {
            return _super.call(this, "pageHome") || this;
        }
        PageHome.getInstance = function () {
            if (this.instance == null)
                this.instance = new PageHome();
            return this.instance;
        };
        PageHome.prototype.onAddToStage = function () {
        };
        PageHome.prototype.onRemoveFromStage = function () {
        };
        return PageHome;
    }(UI.PageBase));
    UI.PageHome = PageHome;
})(UI || (UI = {}));
//# sourceMappingURL=PageHome.js.map