import { ReservationView } from 'ReservationView';
import { ReservationModel } from 'ReservationModel';
import { ITableState, ITimeView } from '../types/types';

export class ReservationController {
    view: ReservationView;
    model: ReservationModel;

    constructor(view: ReservationView, model: ReservationModel) {
        this.view = view;
        this.model = model;

        this.view.bindTimeLine(this.handleTimeLine);
        //todo
        this.model.bindChangeModel(this.onChangeModel);
        this.onChangeModel(this.model.timeView, this.model.hallView);
    }
    onChangeModel = (timeView: ITimeView, hallView: ITableState[]) => {
        this.view.reservationRender(timeView, hallView);
    };

    handleTimeLine = (markLine: number) => {
        this.model.handleTimeLine(markLine);
    };
}
