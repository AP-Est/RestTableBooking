import { ReviewsModel } from './ReviewsPageModel';
import { ReviewsView } from './ReviewsPageView';
import { BaseController } from './BaseController';

export class ReviewsController extends BaseController {
    view: ReviewsView;
    model: ReviewsModel;

    constructor(view: ReviewsView, model: ReviewsModel) {
        super(view, model);
        this.view = view;
        this.model = model;

        // this.view.bindClickMenu();
        // this.view.bindClickButtonReserv();
        // this.view.bindClickMainPage();
        // this.view.bindClickReviews();
    }
}
