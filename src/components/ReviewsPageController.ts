import { ReviewsModel } from './ReviewsPageModel';
import { ReviewsView } from './ReviewsPageView';

export class ReviewsController {
    view: ReviewsView;
    model: ReviewsModel;

    constructor(view: ReviewsView, model: ReviewsModel) {
        this.view = view;
        this.model = model;

        this.view.bindClickMenu();
        this.view.bindClickButtonReserv();
        this.view.bindClickMainPage();
        this.view.bindClickReviews();
    }
}
