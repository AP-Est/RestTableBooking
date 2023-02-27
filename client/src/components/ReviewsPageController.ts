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
    }
}
