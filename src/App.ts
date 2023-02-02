import { MainPageView } from './components/MainPageView';
import { MainPageModel } from './components/MainPageModel';
import { MainPageController } from './components/MainPageController';
import { ReservationView } from './components/ReservationView';
import { ReservationController } from './components/ReservationController';
import { ReservationModel } from './components/ReservationModel';

export class App {
    view: MainPageView | ReservationView | undefined;
    controller: MainPageController | ReservationController | undefined;
    model: MainPageModel | ReservationModel | undefined;

    init() {
        window.addEventListener('hashchange', this.navigate);
        this.navigate();
    }

    navigate = () => {
        const pathHashes = window.location.hash.split('/');
        switch (pathHashes[0]) {
            case 'main':
                this.view = new MainPageView();
                this.model = new MainPageModel();
                this.controller = new MainPageController(this.view, this.model);
                break;
            case 'reservation':
                this.view = new ReservationView();
                this.model = new ReservationModel();
                this.controller = new ReservationController(this.view, this.model);
                break;
            default:
                //TODO сюда можно подпихивать свое, потом нужно будет прописать 404
                this.view = new ReservationView();
                this.model = new ReservationModel();
                this.controller = new ReservationController(this.view, this.model);
                break;
            /*
            default:
                this.view = new MainPageView();
                this.model = new MainPageModel();
                this.controller = new MainPageController(this.view, this.model);
                break;
            default:
                this.view = new MenuView();
                this.model = new MenuModel();
                this.controller = new MenuController(this.view, this.model);
                break;
            */
        }
    };
}
