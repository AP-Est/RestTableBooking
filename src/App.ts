import { MainPageView } from './components/MainPageView';
import { MainPageModel } from './components/MainPageModel';
import { MainPageController } from './components/MainPageController';
import { ReservationView } from './components/ReservationView';
import { ReservationController } from './components/ReservationController';
import { ReservationModel } from './components/ReservationModel';
import { MenuView } from './components/MenuPageView';
import { MenuModel } from './components/MenuPageModel';
import { MenuController } from './components/MenuPageController';
import { ReviewsView } from './components/ReviewsPageView';
import { ReviewsModel } from './components/ReviewsPageModel';
import { ReviewsController } from './components/ReviewsPageController';

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

    viewReviews: ReviewsView | undefined;
    controllerReviews: ReviewsController | undefined;
    modelReviews: ReviewsModel | undefined;

    init() {
        //console.log('init');
        window.addEventListener('hashchange', this.navigate);
        this.navigate();
        this.changeTheme();
    }

    navigate = () => {
        console.log('navigate');
        const pathHashes = window.location.hash.split('/');
        switch (pathHashes[0]) {
            case '':
                this.view = new MainPageView();
                this.model = new MainPageModel();
                this.controller = new MainPageController(this.view, this.model);
                console.log('MainPageView');
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

            case '#reviews':
                this.viewReviews = new ReviewsView();
                this.modelReviews = new ReviewsModel();
                this.controllerReviews = new ReviewsController(this.viewReviews, this.modelReviews);
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
                console.log('MainPageView');
                break;
        }
    };

    changeTheme() {
        const body: Element = <Element>document.querySelector('.body');
        body.addEventListener('click', (event) => {
            const target = event.target as Element;
            if (target.classList.contains('header-switch__slider')) {
                document.body.classList.toggle('dark');
            }
        });
    }
}
