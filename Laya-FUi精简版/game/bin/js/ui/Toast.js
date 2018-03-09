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
    var Toast = /** @class */ (function (_super) {
        __extends(Toast, _super);
        function Toast(msg, w, h) {
            var _this = _super.call(this) || this;
            var view = fairygui.UIPackage.createObject("common", "toast").asCom;
            _this.addChild(view);
            _this.height = view.height;
            view.center();
            var lbl_msg = view.getChild("lbl_msg").asRichTextField;
            lbl_msg.text = msg;
            _this.x = w * 0.5;
            _this.y = h * 0.618;
            _this.alpha = 0;
            Laya.Tween.to(_this, { alpha: 1 }, 800, Laya.Ease.quintOut);
            Laya.Tween.to(_this, { alpha: 0 }, 1200, Laya.Ease.quintIn, Laya.Handler.create(_this, complete), 800);
            function complete() {
                if (this.parent) {
                    Toast.toastobject.splice(Toast.toastobject.indexOf(this), 1);
                    this.parent.removeChild(this);
                }
            }
            return _this;
        }
        Toast.init = function (cont) {
            this._cont = cont;
        };
        Toast.show = function (msg) {
            if (this._cont) {
                var toast = new Toast(msg, this._cont.width, this._cont.height);
                this._cont.addChild(toast);
                for (var i in this.toastobject) {
                    if (this.toastobject[i]) {
                        this.toastobject[i].y -= this.toastobject[i].height + 5;
                    }
                }
                this.toastobject.push(toast);
            }
        };
        Toast.toastobject = new Array();
        return Toast;
    }(fairygui.GComponent));
    UI.Toast = Toast;
})(UI || (UI = {}));
//# sourceMappingURL=Toast.js.map