import { BaseView } from 'BaseView';
import { BaseModel } from 'BaseModel';
import { IRegisteredUser, ISignIn } from '../types/types';

export class BaseController {
    view: BaseView;
    model: BaseModel;

    constructor(view: BaseView, model: BaseModel) {
        this.view = view;
        this.model = model;

        //this.onChangeModelBase(this.model.state);
        this.view.bindClickMenu();
        this.view.bindClickButtonReserv();
        this.view.bindClickMainPage();
        this.view.bindClickLogIn();
        this.view.bindClickSignUp();
        this.view.bindClickSignupLogin();
        this.view.bindClickExitFromSignupLogin();
        this.view.bindClickReviews();
        this.view.bindClickForm();
        this.view.bindBlurForm();
        this.view.bindClickButtonRegister(this.handleRegisterUsers);
        this.view.bindClickButtonLogIn(this.handleSignInUser);
        this.model.bindChangeModelBase(this.onChangeModelBase);
        this.view.bindLoad(this.handleWindowLoad);
        this.view.bindClickExitSignInButton(this.handleClickExitSignInButton);
    }

    handleRegisterUsers = (registeredUserObject: IRegisteredUser) => {
        this.model.createNewUser(registeredUserObject);
    };

    handleSignInUser = (signInObject: ISignIn) => {
        this.model.signInUser(signInObject);
    };

    handleWindowLoad = () => {
        console.log('handleWindowLoad');
        this.model.loadWindow();
    };

    handleClickExitSignInButton = () => {
        this.model.changeStateExit();
    };

    onChangeModelBase = (state: string) => {
        console.log('onChangeModelBase state', state);
        this.view.renderBasePage(state);
    };
}
