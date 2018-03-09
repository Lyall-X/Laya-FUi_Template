class GameScene extends fairygui.GComponent {
    private view: fairygui.GComponent;
    private static instance: GameScene;
    public static getInstance(): GameScene {
        if (this.instance == null)
            this.instance = new GameScene();
        return this.instance;
    }
    public constructor() {
        super();
        this.view = fairygui.UIPackage.createObject("common", "GameScene").asCom;
        this.view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        this.view.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);
        this.addChild(this.view);
    }
}
