import { ReservationView } from 'ReservationView';
import { ReservationModel } from 'ReservationModel';

export class ReservationController {
    viewReservation: ReservationView;
    modelReservation: ReservationModel;

    constructor(view: ReservationView, model: ReservationModel) {
        this.viewReservation = view;
        this.modelReservation = model;
    }
}
