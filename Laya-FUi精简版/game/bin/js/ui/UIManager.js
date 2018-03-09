var Layer;
(function (Layer) {
    Layer[Layer["Fight"] = 0] = "Fight";
    Layer[Layer["Page"] = 1] = "Page";
    Layer[Layer["Main"] = 2] = "Main";
    Layer[Layer["Panel"] = 3] = "Panel";
})(Layer || (Layer = {}));
var UIManager = /** @class */ (function () {
    function UIManager() {
        this.gameUIs = {
            "layerMain": { layer: Layer.Main, action: UI.LayerMain },
        };
        this.uiObject = new Object();
        this.layerObject = new Object();
    }
    UIManager.getInstance = function () {
        if (this.instance == null)
            this.instance = new UIManager();
        return this.instance;
    };
    UIManager.prototype.loadUI = function (uiName, params) {
        if (!this.gameUIs[uiName])
            return;
        this.showUI(uiName, params);
        if (this.layerObject[Layer.Main] && this.gameUIs[uiName].layer == Layer.Page) {
            this.layerObject[Layer.Main].visible = !this.gameUIs[uiName].hideLayerMain;
        }
    };
    UIManager.prototype.showUI = function (uiName, params) {
        if (UI.Loading.getInstance() && UI.Loading.getInstance().parent)
            UI.Loading.getInstance().parent.removeChild(UI.Loading.getInstance());
        var gameUI = this.gameUIs[uiName]["action"].getInstance();
        if (this.gameUIs[uiName]) {
            switch (this.gameUIs[uiName]["layer"]) {
                case Layer.Page:
                    if (this.layerObject[Layer.Page]) {
                        this.layerObject[Layer.Page].removeFromParent();
                        ;
                        this.layerObject[Layer.Page] = null;
                    }
                    break;
            }
            if (params) {
                gameUI.params = params;
            }
            GameContainer.getInstance().uiRoot.addChild(gameUI);
            gameUI.sortingOrder = this.gameUIs[uiName]["layer"];
            this.layerObject[this.gameUIs[uiName]["layer"]] = gameUI;
        }
    };
    return UIManager;
}());
//# sourceMappingURL=UIManager.js.map