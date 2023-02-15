const MAIN_URL = 'http://localhost:3000';

export const getResInfo = () => {
    const resp = fetch(`${MAIN_URL}/`);

    return resp;
};
