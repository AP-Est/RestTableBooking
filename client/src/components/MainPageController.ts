import { MainPageView } from 'MainPageView';
import { MainPageModel } from 'MainPageModel';
import { BaseController } from './BaseController';

export class MainPageController extends BaseController {
    view: MainPageView;
    model: MainPageModel;

    constructor(view: MainPageView, model: MainPageModel) {
        super(view, model);
        this.view = view;
        this.model = model;

        this.view.bindClickMoreMainInf(this.handlMainInf);
        this.view.bindClickMoreAdditInf(this.handlAdditInf);
        this.model.bindChangeModel(this.onChangeModel);
        this.onChangeModel(this.model.mainInf, this.model.additInf);
    }

    handlMainInf = () => {
        this.model.changeMainInf();
    };

    handlAdditInf = () => {
        this.model.changeAdditInf();
    };

    onChangeModel = (moreMainInf: boolean, moreAdditInf: boolean) => {
        this.view.renderPage(moreMainInf, moreAdditInf);
        console.log('onChangeModel');
    };
}
