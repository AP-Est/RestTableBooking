import { MainPageView } from './components/MainPageView';
import { MainPageModel } from './components/MainPageModel';
import { MainPageController } from './components/MainPageController';
import { ReservationView } from './components/ReservationView';
import { ReservationController } from './components/ReservationController';
import { ReservationModel } from './components/ReservationModel';

export class App {
    view: MainPageView | undefined;
    controller: MainPageController | undefined;
    model: MainPageModel | undefined;

    viewReservation: ReservationView | undefined;
    controllerReservation: ReservationController | undefined;
    modelReservation: ReservationModel | undefined;

    init() {
        window.addEventListener('hashchange', this.navigate);
        this.navigate();
    }

    navigate = () => {
        const pathHashes = window.location.hash.split('/');
        switch (pathHashes[0]) {
            case '#main':
                this.view = new MainPageView();
                this.model = new MainPageModel();
                this.controller = new MainPageController(this.view, this.model);
                break;
            case '#reservation':
                this.viewReservation = new ReservationView();
                this.modelReservation = new ReservationModel();
                this.controllerReservation = new ReservationController(this.viewReservation, this.modelReservation);
                break;
            /*
            case '#menu':
                this.view = new MenuView();
                this.model = new MenuModel();
                this.controller = new MenuController(this.view, this.model);
                break;
                */
            default:
                //TODO сюда можно подпихивать свое, потом нужно будет прописать 404
                console.log(pathHashes[0]);
                // this.viewReservation = new ReservationView();
                // this.modelReservation = new ReservationModel();
                // this.controllerReservation = new ReservationController(this.viewReservation, this.modelReservation);
                this.view = new MainPageView();
                this.model = new MainPageModel();
                this.controller = new MainPageController(this.view, this.model);
                break;
        }
    };
}
