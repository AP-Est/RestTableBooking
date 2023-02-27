import createElement from '../Utils/createElement';
import createButton from '../Utils/createButton';
import 'bootstrap';

export function displayCarousel() {
    const headerMain = createElement('div', 'header-main');
    headerMain.classList.add('header-main__wrapper');
    headerMain.innerHTML = `
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src="./image/main1.jpg" class="d-block w-100" alt="image">
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="./image/main2.jpg" class="d-block w-100" alt="image">
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="./image/main3.jpg" class="d-block w-100" alt="image">
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="./image/main4.jpg" class="d-block w-100" alt="image">
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="./image/main5.jpg" class="d-block w-100" alt="image">
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="./image/main6.jpg" class="d-block w-100" alt="image">
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="./image/main7.jpg" class="d-block w-100" alt="image">
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="./image/main8.jpg" class="d-block w-100" alt="image">
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="./image/main9.jpg" class="d-block w-100" alt="image">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>
    `;

    const booking = createElement('div', 'booking');
    const phone = createElement('div', 'booking-phone');
    const phoneRef = createElement('a', 'booking-phone__ref') as HTMLAnchorElement;
    phoneRef.classList.add('header-text');
    phoneRef.classList.add('link-tel');
    phoneRef.textContent = '+(375) 25 - 374 - 9233';
    phoneRef.href = 'tel:+(375) 25 - 374-9233';
    const address = createElement('div', 'booking-address');
    const addressImg = createElement('img', 'booking-img') as HTMLImageElement;
    addressImg.src = './image/loc.svg';
    const addressSpan = createElement('span', 'booking-span');
    addressSpan.textContent = 'st. Rolling Scopes q3';
    const metro = createElement('div', 'booking-metro');
    const metroImg = createElement('img', 'booking-img') as HTMLImageElement;
    metroImg.src = './image/metro.svg';
    const metroSpan = createElement('span', 'booking-span');
    metroSpan.textContent = 'Rsclone';
    const mainBooking = createElement('div', 'booking-main');
    const mainBookingBut = createButton('RESERVATION', 'button');

    mainBooking.append(mainBookingBut);
    metro.append(metroImg, metroSpan);
    address.append(addressImg, addressSpan);
    phone.append(phoneRef);
    booking.append(phone, address, metro, mainBooking);
    headerMain.append(booking);
    return headerMain;
}
