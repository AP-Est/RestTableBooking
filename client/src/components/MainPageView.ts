import '../styles/styleMainPageHeaderFooter.scss';
import '../styles/styleMainPageMainPart.scss';
import '../styles/styleMainPageForm.scss';
import '../styles/styleSwitchTheme.scss';
import { displayMainPageMain } from '../templates/displayMainPageMain';
import { BaseView } from './BaseView';

export class MainPageView extends BaseView {
    constructor() {
        super();
    }

    renderPage(moreMainInf: boolean, moreAdditInf: boolean) {
        this.main.innerHTML = '';
        const mainMainPage = displayMainPageMain(moreMainInf, moreAdditInf);

        this.main.append(mainMainPage);
    }

    bindClickMoreMainInf(handler: () => void) {
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            if (
                target.classList.contains('more-main-inf') ||
                (target.parentElement as HTMLElement).classList.contains('more-main-inf')
            ) {
                handler();
            }
        });
    }

    bindClickMoreAdditInf(handler: () => void) {
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            if (
                target.classList.contains('more-addit-inf') ||
                (target.parentElement as HTMLElement).classList.contains('more-addit-inf')
            ) {
                handler();
            }
        });
    }
}
