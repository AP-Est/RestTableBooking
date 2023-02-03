import { MenuModel } from './MenuPageModel';
import { MenuView } from './MenuPageView';

export class MenuController {
    view: MenuView;
    model: MenuModel;

    constructor(view: MenuView, model: MenuModel) {
        this.view = view;
        this.model = model;
    }
}
