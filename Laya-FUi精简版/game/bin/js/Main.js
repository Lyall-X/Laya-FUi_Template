var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
// 程序入口
var Main = /** @class */ (function () {
    function Main() {
        Laya.init(640, 1136, Laya.WebGL);
        //设置适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
        if (Laya.Browser.width / Laya.Browser.height / Laya.Browser.pixelRatio > 0.75)
            Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_CENTER;
        //设置横竖屏
        Laya.stage.screenMode = Laya.Browser.onMobile ? Laya.Stage.SCREEN_VERTICAL : Laya.Stage.SCREEN_NONE;
        Laya.loader.load([{ url: "res/fui/common@atlas0.png", type: Loader.IMAGE },
            { url: "res/fui/common.bin", type: Loader.BUFFER },
        ], Handler.create(this, this.onLoaded));
    }
    Main.prototype.onLoaded = function () {
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        fairygui.UIPackage.addPackage("res/fui/common", Laya.loader.getRes("res/fui/common.bin"));
        fairygui.GRoot.inst.addChild(new MainScene());
    };
    return Main;
}());
new Main();
//# sourceMappingURL=Main.js.map