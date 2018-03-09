module UI {
    export class PageBase extends fairygui.GComponent {
        public params: any;
        public view: fairygui.GComponent;
        public page_bg: fairygui.GComponent;
        public img_bg: fairygui.GLoader;
        public btn_back: fairygui.GButton;
        public btn_close: fairygui.GButton;
        private pageName: string;

        public constructor(page?: string) {
            super();
            this.pageName = page;
            this.view = new fairygui.GComponent();
            if (page) {
                this.view = fairygui.UIPackage.createObject("page", page).asCom;
                this.view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
                this.view.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);
                this.addChild(this.view);
            }

            this.on(Laya.Event.DISPLAY, this, this.onAddToStage);
            this.on(Laya.Event.UNDISPLAY, this, this.onRemoveFromStage);
        }

        public onAddToStage(): void { }

        public onRemoveFromStage(): void { }

        public close(): void {
        }
    }
}
