import { ReservationView } from 'ReservationView';
import { ReservationModel } from 'ReservationModel';
import { IReservationWindow, ITableState, ITimeView } from '../types/types';

export class ReservationController {
    view: ReservationView;
    model: ReservationModel;

    constructor(view: ReservationView, model: ReservationModel) {
        this.view = view;
        this.model = model;

        this.view.bindTimeLine(this.handleTimeLine);
        this.view.bindDate(this.handleDate);
        this.view.bindGuest(this.handleGuest);
        this.view.bindClickToTable(this.handleClickToTable);
        this.view.bindClickToRButton(this.handleClickToRButton);
        this.view.bindClickToShadow(this.handleClickToShadow);
        //todo
        this.model.bindChangeModel(this.onChangeModel);
        this.onChangeModel(this.model.timeView, this.model.hallView, this.model.reservationWindow);
    }
    onChangeModel = (timeView: ITimeView, hallView: ITableState[], reservationWindow: IReservationWindow) => {
        this.view.reservationRender(timeView, hallView, reservationWindow);
    };

    handleTimeLine = (markLine: number) => {
        this.model.handleTimeLine(markLine);
    };
    handleDate = (changedDate: Date) => {
        this.model.handleDate(changedDate);
    };
    handleGuest = (guestCount: number) => {
        this.model.handleGuest(guestCount);
    };
    handleClickToTable = (tableNumber: number) => {
        this.model.handleClickToTable(tableNumber);
    };
    handleClickToRButton = (resTimeNum: number) => {
        this.model.handleClickToRButton(resTimeNum);
    };
    handleClickToShadow = () => {
        this.model.handleClickToShadow();
    };
}
