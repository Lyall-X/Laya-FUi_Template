class SceneLogin extends fairygui.GComponent {
    private view: fairygui.GComponent;
    private btn_loading: fairygui.GButton;

    private static instance: SceneLogin;
    public static getInstance(): SceneLogin {
        if (this.instance == null)
            this.instance = new SceneLogin();
        return this.instance;
    }

    public constructor() {
        super();
        this.view = fairygui.UIPackage.createObject("common", "SceneLogin").asCom;
        this.view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        this.view.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);
        this.addChild(this.view);
        this.btn_loading = this.view.getChild("btn_loading").asButton;
        this.btn_loading.onClick(this, this.onLogin)
    }

    private onLogin(): void {
        GameContainer.getInstance().loadScene(new SceneMain());
        UI.Toast.show("请输入账号");
    }
}
