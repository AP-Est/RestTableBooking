import { ReservationView } from 'ReservationView';
import { ReservationModel } from 'ReservationModel';
import { ITimeView } from '../types/types';

export class ReservationController {
    view: ReservationView;
    model: ReservationModel;

    constructor(view: ReservationView, model: ReservationModel) {
        this.view = view;
        this.model = model;

        this.view.bindTimeLine(this.handleTimeLine);
        //todo
        this.model.bindChangeModel(this.onChangeModel);
        this.onChangeModel(this.model.timeView);
    }
    onChangeModel = (timeView: ITimeView) => {
        this.view.reservationRender(timeView);
    };

    handleTimeLine = (markLine: number) => {
        this.model.handleTimeLine(markLine);
    };
}
