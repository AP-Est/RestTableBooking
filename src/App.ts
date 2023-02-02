import { MainPageView } from './components/MainPageView';
import { MainPageModel } from './components/MainPageModel';
import { MainPageController } from './components/MainPageController';

export class App {
    view: MainPageView | undefined;
    controller: MainPageController | undefined;
    model: MainPageModel | undefined;

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
        }
    };
}
