export const renderTable = (tableType: number, colorT: string, colorS: string): string => {
    switch (tableType) {
        case 2:
            return `<svg viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="10.4347" cy="28.5485" rx="3.97948" ry="7.07463" fill="#4A4444"/>
            <ellipse cx="10.4347" cy="25.8955" rx="3.97948" ry="7.07463" fill="${colorS}"/>
            <ellipse cx="10.5236" cy="7.83297" rx="4.0305" ry="7.12054" transform="rotate(-179.711 10.5236 7.83297)" fill="#4A4444"/>
            <ellipse cx="10.5107" cy="10.3856" rx="4.0305" ry="6.98619" transform="rotate(-179.711 10.5107 10.3856)" fill="${colorS}"/>
            <circle cx="10.6558" cy="18.1576" r="10.3909" fill="#444343"/>
            <circle cx="10.6558" cy="18.1576" r="9.06437" fill="${colorT}"/>
            </svg>`;
        case 4:
            return `
            <svg viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="25.2883" cy="41.3423" rx="4.20056" ry="7.29571" fill="#4A4444"/>
            <ellipse cx="25.2883" cy="38.6894" rx="4.20056" ry="7.29571" fill="${colorS}"/>
            <ellipse cx="25.2883" cy="7.29571" rx="4.20056" ry="7.29571" fill="#4A4444"/>
            <ellipse cx="25.2883" cy="10.3909" rx="4.20056" ry="7.29571" fill="${colorS}"/>
            <ellipse cx="42.9828" cy="24.5592" rx="4.20056" ry="7.29571" transform="rotate(-89.8903 42.9828 24.5592)" fill="#4A4444"/>
            <ellipse cx="40.3299" cy="24.5541" rx="4.20056" ry="7.29571" transform="rotate(-89.8903 40.3299 24.5541)" fill="${colorS}"/>
            <ellipse cx="8.26496" cy="24.2864" rx="4.20056" ry="7.29571" transform="rotate(-89.8903 8.26496 24.2864)" fill="#4A4444"/>
            <ellipse cx="11.3601" cy="24.2924" rx="4.20056" ry="7.29571" transform="rotate(-89.8903 11.3601 24.2924)" fill="${colorS}"/>
            <circle cx="25.5093" cy="24.319" r="17.2444" fill="#444343"/>
            <circle cx="25.5093" cy="24.319" r="15.4757" fill="${colorT}"/>
            </svg>`;
        case 6:
            return `
            <svg viewBox="0 0 57 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="28.2892" cy="51.0349" rx="5.09513" ry="8.84944" fill="#4A4444"/>
            <ellipse cx="28.2892" cy="47.8169" rx="5.09513" ry="8.84944" fill="${colorS}"/>
            <ellipse cx="28.2892" cy="9.7375" rx="5.09513" ry="8.84944" fill="#4A4444"/>
            <ellipse cx="28.2892" cy="13.4918" rx="5.09513" ry="8.84944" fill="${colorS}"/>
            <ellipse cx="46.4236" cy="19.1491" rx="5.09513" ry="8.84944" transform="rotate(-123 46.4236 19.1491)" fill="#4A4444"/>
            <ellipse cx="43.7248" cy="20.9017" rx="5.09513" ry="8.84944" transform="rotate(-123 43.7248 20.9017)" fill="${colorS}"/>
            <ellipse cx="10.969" cy="41.875" rx="5.09513" ry="8.84944" transform="rotate(-123 10.969 41.875)" fill="#4A4444"/>
            <ellipse cx="14.1176" cy="39.8303" rx="5.09513" ry="8.84944" transform="rotate(-123 14.1176 39.8303)" fill="${colorS}"/>
            <ellipse cx="46.3677" cy="41.9617" rx="5.09513" ry="8.84944" transform="rotate(-57.4002 46.3677 41.9617)" fill="#4A4444"/>
            <ellipse cx="43.6567" cy="40.228" rx="5.09513" ry="8.84944" transform="rotate(-57.4002 43.6567 40.228)" fill="${colorS}"/>
            <ellipse cx="11.0249" cy="19.0623" rx="5.09513" ry="8.84944" transform="rotate(-57.4002 11.0249 19.0623)" fill="#4A4444"/>
            <ellipse cx="14.1877" cy="21.085" rx="5.09513" ry="8.84944" transform="rotate(-57.4002 14.1877 21.085)" fill="${colorS}"/>
            <circle cx="28.5573" cy="30.3862" r="20.9169" fill="#444343"/>
            <circle cx="28.5573" cy="30.3862" r="18.7715" fill="${colorT}"/>
            </svg>`;
        case 8:
            return `
            <svg viewBox="0 0 62 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30.5" cy="51" rx="5.5" ry="9" fill="#4A4444"/>
            <ellipse cx="30.5" cy="47.5" rx="5.5" ry="9.5" fill="${colorS}"/>
            <ellipse cx="30.5" cy="8.5" rx="5.5" ry="8.5" fill="#4A4444"/>
            <ellipse cx="30.5" cy="12" rx="5.5" ry="9" fill="${colorS}"/>
            <ellipse cx="52.7369" cy="29.8029" rx="5.27167" ry="9.15606" transform="rotate(-89.8903 52.7369 29.8029)" fill="#4A4444"/>
            <ellipse cx="49.4074" cy="29.7965" rx="5.27167" ry="9.15606" transform="rotate(-89.8903 49.4074 29.7965)" fill="${colorS}"/>
            <ellipse cx="9.16614" cy="29.4606" rx="5.27167" ry="9.15606" transform="rotate(-89.8903 9.16614 29.4606)" fill="#4A4444"/>
            <ellipse cx="13.0505" cy="29.4681" rx="5.27167" ry="9.15606" transform="rotate(-89.8903 13.0505 29.4681)" fill="${colorS}"/>
            <ellipse cx="45.9359" cy="44.7354" rx="5.27167" ry="9.15606" transform="rotate(-45.6566 45.9359 44.7354)" fill="#4A4444"/>
            <ellipse cx="43.5548" cy="42.4083" rx="5.27167" ry="9.15606" transform="rotate(-45.6566 43.5548 42.4083)" fill="${colorS}"/>
            <ellipse cx="15.3782" cy="14.8702" rx="5.27167" ry="9.15606" transform="rotate(-45.6566 15.3782 14.8702)" fill="#4A4444"/>
            <ellipse cx="18.1562" cy="17.5852" rx="5.27167" ry="9.15606" transform="rotate(-45.6566 18.1562 17.5852)" fill="${colorS}"/>
            <ellipse cx="46.394" cy="14.1321" rx="5.27167" ry="9.15606" transform="rotate(-135.547 46.394 14.1321)" fill="#4A4444"/>
            <ellipse cx="44.0623" cy="16.5088" rx="5.27167" ry="9.15606" transform="rotate(-135.547 44.0623 16.5088)" fill="${colorS}"/>
            <ellipse cx="15.6952" cy="45.0531" rx="5.27167" ry="9.15606" transform="rotate(-135.547 15.6952 45.0531)" fill="#4A4444"/>
            <ellipse cx="18.4155" cy="42.2803" rx="5.27167" ry="9.15606" transform="rotate(-135.547 18.4155 42.2803)" fill="${colorS}"/>
            <circle cx="30.5" cy="29.5" r="21.5" fill="#444343"/>
            <circle cx="30.5" cy="29.5" r="19.5" fill="${colorT}"/>
            </svg>`;
        default:
            return 'TableTypeError';
    }
};
