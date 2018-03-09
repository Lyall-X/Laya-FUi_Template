module UI {
    export class Loading extends fairygui.GComponent {
        private static instance: Loading;
        public static getInstance(): Loading {
            if (this.instance == null)
                this.instance = new Loading();
            return this.instance;
        }

        private view: fairygui.GComponent;
        private img_loading: fairygui.GImage;
        private lbl_progress: fairygui.GTextField;

        public constructor() {
            super();
            this.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
            this.view = fairygui.UIPackage.createObject("common", "loading").asCom;
            this.addChild(this.view);
            this.view.center();

            this.img_loading = this.view.getChild("img_loading").asImage;
            this.lbl_progress = this.view.getChild("lbl_progress").asTextField;

            this.setProgress(0, 1);
        }

        private runLoading() {
            this.img_loading.rotation += 3;
        }

        public setProgress(itemsLoaded: number, itemsTotal: number): void {
            if (this.lbl_progress) {
                this.lbl_progress.text = Math.round(itemsLoaded / itemsTotal * 100) + "%";
            }
        }
    }
}
