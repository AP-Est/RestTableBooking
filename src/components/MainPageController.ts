import { MainPageView } from 'MainPageView';
import { MainPageModel } from 'MainPageModel';

export class MainPageController {
    view: MainPageView;
    model: MainPageModel;

    constructor(view: MainPageView, model: MainPageModel) {
        this.view = view;
        this.model = model;

        this.view.bindClickMenu();
        this.view.bindClickButtonReserv();
        this.view.bindClickMainPage();
    }
}
