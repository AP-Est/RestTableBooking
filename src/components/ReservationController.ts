import { ReservationView } from 'ReservationView';
import { ReservationModel } from 'ReservationModel';

export class ReservationController {
    view: ReservationView;
    model: ReservationModel;

    constructor(view: ReservationView, model: ReservationModel) {
        this.view = view;
        this.model = model;
    }
}
