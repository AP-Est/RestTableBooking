import { MainPageView } from './components/MainPageView';
import { MainPageModel } from './components/MainPageModel';
import { MainPageController } from './components/MainPageController';
import { ReservationView } from './components/ReservationView';
import { ReservationController } from './components/ReservationController';
import { ReservationModel } from './components/ReservationModel';
import { MenuView } from './components/MenuPageView';
import { MenuModel } from './components/MenuPageModel';
import { MenuController } from './components/MenuPageController';

export class App {
    view: MainPageView | undefined;
    controller: MainPageController | undefined;
    model: MainPageModel | undefined;

    viewMenu: MenuView | undefined;
    controllerMenu: MenuController | undefined;
    modelMenu: MenuModel | undefined;

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
            case '':
                this.view = new MainPageView();
                this.model = new MainPageModel();
                this.controller = new MainPageController(this.view, this.model);
                break;
            case '#reservation':
                this.viewReservation = new ReservationView();
                this.modelReservation = new ReservationModel();
                this.controllerReservation = new ReservationController(this.viewReservation, this.modelReservation);
                break;

            case '#menu':
                this.viewMenu = new MenuView();
                this.modelMenu = new MenuModel();
                this.controllerMenu = new MenuController(this.viewMenu, this.modelMenu);
                break;

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
