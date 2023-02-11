export class MainPageModel {
    mainInf: boolean;
    additInf: boolean;
    onChangeModel: (moreMainInf: boolean, moreAdditInf: boolean) => void;

    constructor() {
        this.mainInf = false;
        this.additInf = false;

        this.onChangeModel = (moreMainInf: boolean, moreAdditInf: boolean) => {
            return undefined;
        };
    }

    changeMainInf() {
        this.mainInf = !this.mainInf;
        console.log('this.mainInf:', this.mainInf);
        this.onChangeModel(this.mainInf, this.additInf);
    }

    changeAdditInf() {
        this.additInf = !this.additInf;
        console.log('this.additInf:', this.additInf);
        this.onChangeModel(this.mainInf, this.additInf);
    }

    bindChangeModel(callback: (moreMainInf: boolean, moreAdditInf: boolean) => void) {
        this.onChangeModel = callback;
    }
}
