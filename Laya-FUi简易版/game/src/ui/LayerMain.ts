namespace UI {
    export class LayerMain extends fairygui.GComponent {
        private view: fairygui.GComponent;
        private static instance: LayerMain;
        public static getInstance(): LayerMain {
            if (this.instance == null)
                this.instance = new LayerMain();
            return this.instance;
        }
        public constructor() {
            super();
            this.view = fairygui.UIPackage.createObject("common", "layerMain").asCom;
            this.view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
            this.view.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);
            this.addChild(this.view);
        }
    }
}
