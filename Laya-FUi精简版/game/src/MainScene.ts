class MainScene extends fairygui.GComponent {
    private view: fairygui.GComponent;
    private btn_loading: fairygui.GButton;

    private static instance: MainScene;
    public static getInstance(): MainScene {
        if (this.instance == null)
            this.instance = new MainScene();
        return this.instance;
    }

    public constructor() {
        super();
        this.view = fairygui.UIPackage.createObject("common", "MainScene").asCom;
        this.view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        this.view.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);
        this.addChild(this.view);
        this.btn_loading = this.view.getChild("btn_loading").asButton;
        this.btn_loading.onClick(this, this.onLogin)
    }

    private onLogin(): void {
        this.view.removeChildren();
        this.view.addChild(new GameScene())
        UI.Toast.show("开始游戏");
    }
}
