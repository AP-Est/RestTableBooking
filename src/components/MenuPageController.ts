import { MenuModel } from './MenuPageModel';
import { MenuView } from './MenuPageView';

export class MenuController {
    view: MenuView;
    model: MenuModel;

    constructor(view: MenuView, model: MenuModel) {
        this.view = view;
        this.model = model;

        this.view.bindClickMenu();
        this.view.bindClickButtonReserv();
        this.view.bindClickMainPage();
        this.view.bindClickReviews();
    }
}
