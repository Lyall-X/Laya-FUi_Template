class SceneMain extends fairygui.GComponent {
    private static instance: SceneMain;
    public static getInstance(): SceneMain {
        if (this.instance == null)
            this.instance = new SceneMain();
        return this.instance;
    }

    public name = "SceneMain";
    public constructor() {
        super();
        GameContainer.getInstance().uiRoot = this;
        this.addChild(new fairygui.GComponent());//Page
        UIManager.getInstance().loadUI("layerMain");
    }
}
