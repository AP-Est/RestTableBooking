import { BaseView } from 'BaseView';
import { BaseModel } from 'BaseModel';

export class BaseController {
    view: BaseView;
    model: BaseModel;

    constructor(view: BaseView, model: BaseModel) {
        this.view = view;
        this.model = model;
    }
}