class GameContainer extends fairygui.GComponent {
    private static instance: GameContainer;
    public static getInstance(): GameContainer {
        if (this.instance == null)
            this.instance = new GameContainer();
        return this.instance;
    }
    public uiRoot: fairygui.GComponent;

    public constructor() {
        super();
        this.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        UI.Toast.init(this);
        this.loadScene(new SceneLogin());
    }

    public loadScene(element: fairygui.GObject): void {
        this.removeChildren();
        this.addChild(element);
    }
}
