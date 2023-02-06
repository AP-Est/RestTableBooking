import getElement from '../Utils/getElement';
import createElement from '../Utils/createElement';
import createButton from '../Utils/createButton';
import '../styles/styleMainPageHeaderFooter.scss';
import '../styles/styleMainPageMainPart.scss';
import { displayHeader } from '../templates/displayHeader';
import { displayFooter } from '../templates/displayFooter';

export class MainPageView {
    body: HTMLElement;
    header: HTMLElement;
    main: HTMLElement;
    footer: HTMLElement;

    constructor() {
        this.body = getElement('body') as HTMLElement;
        this.body.innerHTML = '';

        this.header = displayHeader();
        this.main = this.displayMain();
        this.footer = displayFooter();
        this.body.append(this.header, this.main, this.footer);
    }

    displayMain() {
        const main = createElement('main', 'main');

        const infDiv = createElement('div', 'inf');
        const infText = createElement('h2', 'inf__text');
        infText.textContent = 'Information';

        const mainInf = createElement('div', 'main-inf');

        const descr = createElement('div', 'main-inf__descr');
        const descrH3 = createElement('h3', 'main-inf__Title');
        descrH3.textContent = 'Description';
        const descrText = createElement('div', 'main-inf__descr-text');
        const descrTextOne = createElement('p', 'main-inf__descr-p');
        descrTextOne.textContent =
            'Eshak Restaurant is a combination of a cozy atmosphere, excellent cuisine and caring for guests. The project of actor and restaurateur Sergey Svetlakov. A modern incarnation of a traditional oriental restaurant.';
        const descrTextTwo = createElement('p', 'main-inf__descr-p');
        descrTextTwo.textContent =
            'The East is a delicate matter. For ALBA GROUP and actor, producer Sergey Svetlakov, these are not empty words. How...';
        const descrBut = createElement('div', 'main-inf__descr-but');
        const descrButArrow = createElement('span', 'main-inf__descr-but-arrow');
        descrButArrow.innerHTML = `&#8681;`;

        const additInf = createElement('div', 'main-inf__addit');
        const additContent = createElement('div', 'main-inf__content');
        const itemReceipt = createElement('div', 'main-inf__item');
        const imgReceipt = createElement('img', 'main-inf__img') as HTMLImageElement;
        imgReceipt.src = 'https://leclick.ru/img/icons/price_w.svg';
        const span1Receipt = createElement('span', 'main-inf__span');
        span1Receipt.textContent = 'Average check:';
        const span2Receipt = createElement('span', 'main-inf__span');
        span2Receipt.textContent = '2000 - 2500';
        const itemFood = createElement('div', 'main-inf__item');
        const imgFood = createElement('img', 'main-inf__img') as HTMLImageElement;
        imgFood.src = 'https://leclick.ru/img/icons/kitchen_w.svg';
        const span1Food = createElement('span', 'main-inf__span');
        span1Food.textContent = 'Kitchen:';
        const span2Food = createElement('span', 'main-inf__span');
        span2Food.classList.add('span_noBlock');
        span2Food.textContent = 'European,';
        const span3Food = createElement('span', 'main-inf__span');
        span3Food.classList.add('span_noBlock');
        span3Food.textContent = 'Caucasian,';
        const span4Food = createElement('span', 'main-inf__span');
        span4Food.textContent = 'Azerbaijani';
        const itemPurpose = createElement('div', 'main-inf__item');
        const imgPurpose = createElement('img', 'main-inf__img') as HTMLImageElement;
        imgPurpose.src = 'https://leclick.ru/img/icons/recommended_w.svg';
        const span1Purpose = createElement('span', 'main-inf__span');
        span1Purpose.textContent = 'Visit purpose:';
        const span2Purpose = createElement('span', 'main-inf__span');
        span2Purpose.textContent = 'Business meeting';
        const span3Purpose = createElement('span', 'main-inf__span');
        span3Purpose.textContent = 'Banquets';
        const span4Purpose = createElement('span', 'main-inf__span');
        span4Purpose.textContent = 'Family dinner';
        const itemSpecifics = createElement('div', 'main-inf__item');
        const imgSpecifics = createElement('img', 'main-inf__img') as HTMLImageElement;
        imgSpecifics.src = 'https://leclick.ru/img/icons/features_w.svg';
        const span1Specifics = createElement('span', 'main-inf__span');
        span1Specifics.textContent = 'Features:';
        const span2Specifics = createElement('span', 'main-inf__span');
        span2Specifics.textContent = 'WiFi';
        const span3Specifics = createElement('span', 'main-inf__span');
        span3Specifics.textContent = 'Bar counter';
        const span4Specifics = createElement('span', 'main-inf__span');
        span4Specifics.textContent = 'Child animation';
        const span5Specifics = createElement('span', 'main-inf__span');
        span5Specifics.textContent = 'Children’s menu';

        const descrBut2 = createElement('div', 'main-inf__descr-but');
        const descrButArrow2 = createElement('span', 'main-inf__descr-but-arrow');
        descrButArrow2.innerHTML = `&#8681;`;

        const workTime = createElement('div', 'main-inf__wTime');
        const workTimeTitle = createElement('h3', 'main-inf__Title');
        workTimeTitle.textContent = 'Working hours';
        const workTimeContent = createElement('div', 'main-inf__wContent');
        const workTimeItem1 = createElement('div', 'main-inf__wItem');
        const workTimeDay1 = createElement('p', 'main-inf__wText');
        workTimeDay1.classList.add('wDay');
        workTimeDay1.textContent = 'Mo';
        const workTimeFrom1 = createElement('p', 'main-inf__wText');
        workTimeFrom1.textContent = '12:00';
        const workTimeTo1 = createElement('p', 'main-inf__wText');
        workTimeTo1.textContent = '00:00';
        const workTimeItem2 = createElement('div', 'main-inf__wItem');
        const workTimeDay2 = createElement('p', 'main-inf__wText');
        workTimeDay2.classList.add('wDay');
        workTimeDay2.textContent = 'Tu';
        const workTimeFrom2 = createElement('p', 'main-inf__wText');
        workTimeFrom2.textContent = '12:00';
        const workTimeTo2 = createElement('p', 'main-inf__wText');
        workTimeTo2.textContent = '00:00';
        const workTimeItem3 = createElement('div', 'main-inf__wItem');
        const workTimeDay3 = createElement('p', 'main-inf__wText');
        workTimeDay3.classList.add('wDay');
        workTimeDay3.textContent = 'We';
        const workTimeFrom3 = createElement('p', 'main-inf__wText');
        workTimeFrom3.textContent = '12:00';
        const workTimeTo3 = createElement('p', 'main-inf__wText');
        workTimeTo3.textContent = '00:00';
        const workTimeItem4 = createElement('div', 'main-inf__wItem');
        const workTimeDay4 = createElement('p', 'main-inf__wText');
        workTimeDay4.classList.add('wDay');
        workTimeDay4.textContent = 'Th';
        const workTimeFrom4 = createElement('p', 'main-inf__wText');
        workTimeFrom4.textContent = '12:00';
        const workTimeTo4 = createElement('p', 'main-inf__wText');
        workTimeTo4.textContent = '00:00';
        const workTimeItem5 = createElement('div', 'main-inf__wItem');
        const workTimeDay5 = createElement('p', 'main-inf__wText');
        workTimeDay5.classList.add('wDay');
        workTimeDay5.textContent = 'Fr';
        const workTimeFrom5 = createElement('p', 'main-inf__wText');
        workTimeFrom5.textContent = '12:00';
        const workTimeTo5 = createElement('p', 'main-inf__wText');
        workTimeTo5.textContent = '06:00';
        const workTimeItem6 = createElement('div', 'main-inf__wItem');
        const workTimeDay6 = createElement('p', 'main-inf__wText');
        workTimeDay6.classList.add('wDay');
        workTimeDay6.textContent = 'Sa';
        const workTimeFrom6 = createElement('p', 'main-inf__wText');
        workTimeFrom6.textContent = '12:00';
        const workTimeTo6 = createElement('p', 'main-inf__wText');
        workTimeTo6.textContent = '06:00';
        const workTimeItem7 = createElement('div', 'main-inf__wItem');
        const workTimeDay7 = createElement('p', 'main-inf__wText');
        workTimeDay7.classList.add('wDay');
        workTimeDay7.textContent = 'Su';
        const workTimeFrom7 = createElement('p', 'main-inf__wText');
        workTimeFrom7.textContent = '12:00';
        const workTimeTo7 = createElement('p', 'main-inf__wText');
        workTimeTo7.textContent = '00:00';

        workTimeItem1.append(workTimeDay1, workTimeFrom1, workTimeTo1);
        workTimeItem2.append(workTimeDay2, workTimeFrom2, workTimeTo2);
        workTimeItem3.append(workTimeDay3, workTimeFrom3, workTimeTo3);
        workTimeItem4.append(workTimeDay4, workTimeFrom4, workTimeTo4);
        workTimeItem5.append(workTimeDay5, workTimeFrom5, workTimeTo5);
        workTimeItem6.append(workTimeDay6, workTimeFrom6, workTimeTo6);
        workTimeItem7.append(workTimeDay7, workTimeFrom7, workTimeTo7);
        workTimeContent.append(
            workTimeItem1,
            workTimeItem2,
            workTimeItem3,
            workTimeItem4,
            workTimeItem5,
            workTimeItem6,
            workTimeItem7
        );
        workTime.append(workTimeTitle, workTimeContent);
        descrBut2.append(descrButArrow2);
        itemSpecifics.append(
            imgSpecifics,
            span1Specifics,
            span2Specifics,
            span3Specifics,
            span4Specifics,
            span5Specifics
        );
        itemPurpose.append(imgPurpose, span1Purpose, span2Purpose, span3Purpose, span4Purpose);
        itemFood.append(imgFood, span1Food, span2Food, span3Food, span4Food);
        itemReceipt.append(imgReceipt, span1Receipt, span2Receipt);
        additContent.append(itemReceipt, itemFood, itemPurpose, itemSpecifics);
        additInf.append(additContent, descrBut2);
        descrBut.append(descrButArrow);
        descrText.append(descrTextOne, descrTextTwo);
        descr.append(descrH3, descrText, descrBut);
        mainInf.append(descr, additInf, workTime);
        infDiv.append(infText);
        main.append(infDiv, mainInf);

        return main;
    }

    bindClickMenu() {
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            if (target.classList.contains('header-main-text')) {
                window.location.hash = `menu`;
            }
        });
    }

    bindClickButtonReserv() {
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            const parent = target.parentElement as Element;
            if (target.classList.contains('booking-main') || parent.classList.contains('booking-main')) {
                window.location.hash = `reservation`;
            }
        });
    }

    bindClickMainPage() {
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            if (target.classList.contains('link-main-page')) {
                window.location.hash = '';
            }
        });
    }
}
