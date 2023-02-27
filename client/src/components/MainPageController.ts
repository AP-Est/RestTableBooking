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

        this.onChangeModel(this.model.mainInf, this.model.additInf);
        this.view.bindClickMoreMainInf(this.handlMainInf);
        this.view.bindClickMoreAdditInf(this.handlAdditInf);
        this.model.bindChangeModel(this.onChangeModel);
    }

    handlMainInf = () => {
        this.model.changeMainInf();
    };

    handlAdditInf = () => {
        this.model.changeAdditInf();
    };

    onChangeModel = (moreMainInf: boolean, moreAdditInf: boolean) => {
        this.view.renderPage(moreMainInf, moreAdditInf);
    };
}
