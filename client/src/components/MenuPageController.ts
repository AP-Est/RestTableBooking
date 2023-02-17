import { MenuModel } from './MenuPageModel';
import { MenuView } from './MenuPageView';
import { BaseController } from './BaseController';

export class MenuController extends BaseController {
    view: MenuView;
    model: MenuModel;

    constructor(view: MenuView, model: MenuModel) {
        super(view, model);
        this.view = view;
        this.model = model;

        // this.view.bindClickMenu();
        // this.view.bindClickButtonReserv();
        // this.view.bindClickMainPage();
        // this.view.bindClickReviews();
    }
}
