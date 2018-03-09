module UI {
    export class Toast extends fairygui.GComponent {
        private static _cont: fairygui.GComponent;
        private static toastobject: Array<Toast> = new Array();

        public static init(cont: fairygui.GComponent): void {
            this._cont = cont;
        }

        public static show(msg: string): void {
            if (this._cont) {
                var toast: Toast = new Toast(msg, this._cont.width, this._cont.height);
                this._cont.addChild(toast);
                for (var i in this.toastobject) {
                    if (this.toastobject[i]) {
                        this.toastobject[i].y -= this.toastobject[i].height + 5;
                    }
                }
                this.toastobject.push(toast);
            }
        }

        public constructor(msg: string, w: number, h: number) {
            super();
            var view = fairygui.UIPackage.createObject("common", "toast").asCom;
            this.addChild(view);
            this.height = view.height;
            view.center();

            var lbl_msg: fairygui.GRichTextField = view.getChild("lbl_msg").asRichTextField;
            lbl_msg.text = msg;
            this.x = w * 0.5;
            this.y = h * 0.618;
            this.alpha = 0;

            Laya.Tween.to(this, { alpha: 1 }, 800, Laya.Ease.quintOut);
            Laya.Tween.to(this, { alpha: 0 }, 1200, Laya.Ease.quintIn, Laya.Handler.create(this, complete), 800);

            function complete(): void {
                if (this.parent) {
                    Toast.toastobject.splice(Toast.toastobject.indexOf(this), 1);
                    this.parent.removeChild(this);
                }
            }
        }
    }
}
