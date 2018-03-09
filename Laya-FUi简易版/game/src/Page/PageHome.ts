module UI {
    export class PageHome extends PageBase {
        private static instance: PageHome;
        public static getInstance(): PageHome {
            if (this.instance == null)
                this.instance = new PageHome();
            return this.instance;
        }


        public constructor() {
            super("pageHome");
        }

        public onAddToStage(): void {
        }

        public onRemoveFromStage(): void {
        }
    }
}
