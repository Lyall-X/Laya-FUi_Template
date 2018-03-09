enum Layer {
    Fight = 0, Page = 1, Main = 2, Panel = 3
}

class UIManager {
    private static instance: UIManager;
    public static getInstance(): UIManager {
        if (this.instance == null)
            this.instance = new UIManager();
        return this.instance;
    }

    private uiObject: Object;
    public layerObject: Object;
    public gameUIs = {
        "layerMain": { layer: Layer.Main, action: UI.LayerMain },

        // "pageGuide": { layer: Layer.Page, action: UI.PageGuide },
    };

    public constructor() {
        this.uiObject = new Object();
        this.layerObject = new Object();
    }


    public loadUI(uiName: string, params?: any) {
        if (!this.gameUIs[uiName])
            return;
        this.showUI(uiName, params);

        if (this.layerObject[Layer.Main] && this.gameUIs[uiName].layer == Layer.Page) {
            this.layerObject[Layer.Main].visible = !this.gameUIs[uiName].hideLayerMain;
        }
    }

    private showUI(uiName: string, params?: any) {
        if (UI.Loading.getInstance() && UI.Loading.getInstance().parent)
            UI.Loading.getInstance().parent.removeChild(UI.Loading.getInstance());

        var gameUI = this.gameUIs[uiName]["action"].getInstance();
        if (this.gameUIs[uiName]) {
            switch (this.gameUIs[uiName]["layer"]) {
                case Layer.Page:
                    if (this.layerObject[Layer.Page]) {
                        this.layerObject[Layer.Page].removeFromParent();;
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
    }
}
