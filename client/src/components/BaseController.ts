import { BaseView } from 'BaseView';
import { BaseModel } from 'BaseModel';

export class BaseController {
    view: BaseView;
    model: BaseModel;

    constructor(view: BaseView, model: BaseModel) {
        this.view = view;
        this.model = model;

        this.view.bindClickMenu();
        this.view.bindClickButtonReserv();
        this.view.bindClickMainPage();
        this.view.bindClickLogIn();
        this.view.bindClickSignUp();
        this.view.bindClickSignupLogin();
        this.view.bindClickExitFromSignupLogin();
        this.view.bindClickReviews();
        //this.view.changeTheme();
        this.view.bindClickForm();
        this.view.bindBlurForm();
        this.view.bindClickButtonRegister();
    }
}
